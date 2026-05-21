import Papa from "papaparse";
import type { AdData, PromptRow, StoreAd } from "./types";

const SHEET_ID = "1qPLVF3gkzOl0adlRTbgtpuQpcEk3p_LOFLOfWuN83pk";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;
const ADS_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=1157609173`;

function pickHeader(
  row: Record<string, string>,
  candidates: string[],
): string {
  for (const key of candidates) {
    const value = row[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }
  }
  return "";
}

function parsePageOrder(raw: string): { page: number; order: number | null } {
  const cleaned = raw.replace(/\s+/g, "");
  if (!cleaned) return { page: 0, order: null };

  const match = cleaned.match(/^(\d+)(?:\D+(\d+))?/);
  if (!match) return { page: 0, order: null };

  const page = Number.parseInt(match[1], 10);
  const order = match[2] ? Number.parseInt(match[2], 10) : null;
  return {
    page: Number.isFinite(page) ? page : 0,
    order: order != null && Number.isFinite(order) ? order : null,
  };
}

export async function fetchPrompts(): Promise<PromptRow[]> {
  try {
    const res = await fetch(CSV_URL, { next: { revalidate: 60 } });
    if (!res.ok) return [];

    const csv = await res.text();
    const parsed = Papa.parse<Record<string, string>>(csv, {
      header: true,
      skipEmptyLines: "greedy",
    });

    let curChapter = "";
    let curSection = "";
    const rows: PromptRow[] = [];

    for (const r of parsed.data ?? []) {
      const explicitChapter = pickHeader(r, ["장", "Chapter", "chapter"]);
      const explicitSection = pickHeader(r, ["절", "Section", "section"]);
      const pageOrderRaw = pickHeader(r, [
        "쪽수-등장 순서",
        "쪽수-등장순서",
        "쪽수",
        "Page",
        "page",
      ]);
      const prompt = pickHeader(r, [
        "복붙 내용",
        "복붙내용",
        "프롬프트",
        "Prompt",
        "prompt",
      ]);

      if (explicitChapter) curChapter = explicitChapter;
      if (explicitSection) curSection = explicitSection;
      if (!prompt) continue;

      const { page, order } = parsePageOrder(pageOrderRaw);

      const chapter = curChapter || (page > 0 ? `${page}쪽` : "기타");
      const section =
        curSection || (order != null ? `${order}번 프롬프트` : "");

      rows.push({
        id: rows.length,
        chapter,
        section,
        page,
        prompt,
      });
    }

    return rows;
  } catch {
    return [];
  }
}

const KNOWN_STORES = ["교보문고", "예스24", "알라딘"];

export async function fetchAds(): Promise<AdData> {
  try {
    const res = await fetch(ADS_CSV_URL, { next: { revalidate: 60 } });
    if (!res.ok) return { stores: [], events: [] };

    const csv = await res.text();
    const parsed = Papa.parse<string[]>(csv, { skipEmptyLines: "greedy" });
    const rows = (parsed.data ?? []).slice(1);

    const stores: StoreAd[] = [];
    const events: AdData["events"] = [];

    for (const row of rows) {
      const label = (row[0] ?? "").trim();
      const saleUrl = (row[1] ?? "").trim();
      const lectureUrl = (row[2] ?? "").trim();
      if (!label) continue;

      if (KNOWN_STORES.includes(label) && saleUrl && lectureUrl) {
        stores.push({ name: label, saleUrl, lectureUrl });
      } else if (saleUrl) {
        events.push({ title: label, url: saleUrl });
      }
    }

    return { stores, events };
  } catch {
    return { stores: [], events: [] };
  }
}
