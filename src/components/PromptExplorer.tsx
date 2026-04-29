"use client";

import { useMemo, useState } from "react";
import type { PromptRow } from "@/lib/types";
import { PromptTable } from "./PromptTable";
import { ScrollReveal } from "./ScrollReveal";
import { SearchBar } from "./SearchBar";

type Props = {
  initialRows: PromptRow[];
};

export function PromptExplorer({ initialRows }: Props) {
  const [query, setQuery] = useState("");
  const [chapter, setChapter] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const chapters = useMemo(() => {
    const s = new Set<string>();
    initialRows.forEach((row) => {
      if (row.chapter) s.add(row.chapter);
    });
    return Array.from(s).sort((a, b) => a.localeCompare(b, "ko"));
  }, [initialRows]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = initialRows.filter((row) => {
      const matchChapter = !chapter || row.chapter === chapter;
      const hay =
        `${row.chapter} ${row.section} ${row.page} ${row.prompt}`.toLowerCase();
      const matchQ = !q || hay.includes(q);
      return matchChapter && matchQ;
    });

    return [...out].sort((a, b) => {
      const byPage = sortAsc ? a.page - b.page : b.page - a.page;
      if (byPage !== 0) return byPage;
      return sortAsc ? a.id - b.id : b.id - a.id;
    });
  }, [initialRows, query, chapter, sortAsc]);

  const filterActive = query.trim().length > 0 || chapter.length > 0;

  return (
    <section
      id="prompts"
      className="bg-surface-soft px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
    >
      <div className="flex flex-col gap-3 border-b border-hairline pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold leading-[1.35] tracking-[0.16px] text-youtube">
            프롬프트 라이브러리
          </p>
          <h2 className="mt-2 text-[28px] font-bold leading-[1.15] text-ink sm:text-[34px]">
            프롬프트 검색
          </h2>
        </div>
        <p className="max-w-md text-sm font-semibold leading-[1.6] text-body">
          검색하거나 장을 고른 뒤 복사 버튼으로 바로 붙여넣으세요.
        </p>
      </div>

      <ScrollReveal className="mt-6">
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          chapter={chapter}
          onChapterChange={setChapter}
          chapters={chapters}
        />
        <p className="mt-6 flex flex-wrap items-center gap-2 text-sm font-semibold leading-[1.35] text-muted">
          <span>
            총 {initialRows.length}개 중{" "}
            <span className="font-bold text-youtube">{filtered.length}</span>개
          </span>
          <span
            className={
              filterActive
                ? "rounded-full border border-youtube/35 bg-youtube/10 px-3 py-1 text-sm font-bold text-youtube"
                : "rounded-full border border-hairline bg-canvas px-3 py-1 text-sm font-bold text-muted"
            }
          >
            {filterActive ? "필터 적용 중" : "전체 보기"}
          </span>
        </p>

        <PromptTable
          rows={filtered}
          sortAsc={sortAsc}
          onToggleSort={() => setSortAsc((value) => !value)}
        />
      </ScrollReveal>
    </section>
  );
}
