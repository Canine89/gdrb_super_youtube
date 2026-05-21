"use client";

import { useEffect, useState } from "react";
import type { PromptRow } from "@/lib/types";
import { CopyButton } from "./CopyButton";

function preview(text: string, max = 200) {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max).trimEnd()}...`;
}

type Props = {
  rows: PromptRow[];
  sortAsc: boolean;
  onToggleSort: () => void;
};

export function PromptTable({ rows, sortAsc, onToggleSort }: Props) {
  const [open, setOpen] = useState<PromptRow | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="mt-6 hidden overflow-x-auto md:block">
        <table className="w-full table-fixed border-collapse text-left text-sm font-semibold leading-[1.45]">
          <colgroup>
            <col className="w-[12%]" />
            <col className="w-[76%] lg:w-[78%]" />
            <col className="w-[12%] lg:w-[10%]" />
          </colgroup>
          <thead>
            <tr className="border-b-2 border-ink">
              <th className="pb-4 pr-4">
                <button
                  type="button"
                  onClick={onToggleSort}
                  className="inline-flex items-center gap-1 font-bold text-ink"
                >
                  쪽수
                  <span aria-hidden className="text-link">
                    {sortAsc ? "↑" : "↓"}
                  </span>
                </button>
              </th>
              <th className="pb-4 pr-4 font-bold text-ink">프롬프트</th>
              <th className="pb-4 font-bold text-ink">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr className="border-b border-hairline">
                <td colSpan={3} className="py-12 text-center font-semibold text-muted">
                  조건에 맞는 프롬프트가 없습니다.
                </td>
              </tr>
            ) : null}
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-hairline">
                <td className="whitespace-nowrap py-4 pr-4 align-top text-body">
                  {row.page > 0 ? `${row.page}쪽` : "-"}
                </td>
                <td className="py-4 pr-4 align-top text-body">
                  <p className="line-clamp-3 whitespace-pre-wrap">
                    {preview(row.prompt)}
                  </p>
                  {row.prompt.length > 200 ? (
                    <button
                      type="button"
                      className="mt-2 text-sm font-bold text-link active:text-link-active"
                      onClick={() => setOpen(row)}
                    >
                      더 보기
                    </button>
                  ) : null}
                </td>
                <td className="py-4 align-top">
                  <CopyButton text={row.prompt} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-6 flex flex-col gap-3 md:hidden">
        {rows.length === 0 ? (
          <li className="rounded-[var(--radius-md)] border border-hairline bg-canvas p-6 text-center text-sm font-semibold text-muted">
            조건에 맞는 프롬프트가 없습니다.
          </li>
        ) : null}
        {rows.map((row) => (
          <li
            key={row.id}
            className="rounded-[var(--radius-md)] border border-hairline bg-canvas p-5 shadow-[0_8px_24px_rgba(36,36,36,0.04)]"
          >
            <p className="text-sm font-bold text-ink">
              {row.page > 0 ? `${row.page}쪽` : "쪽수 없음"}
            </p>
            <p className="mt-4 line-clamp-4 whitespace-pre-wrap text-sm font-semibold leading-[1.5] text-body">
              {preview(row.prompt, 160)}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {row.prompt.length > 160 ? (
                <button
                  type="button"
                  className="w-fit text-sm font-bold text-link active:text-link-active"
                  onClick={() => setOpen(row)}
                >
                  더 보기
                </button>
              ) : null}
              <CopyButton text={row.prompt} className="w-full sm:ml-auto sm:w-auto" />
            </div>
          </li>
        ))}
      </ul>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-dark/70 p-4"
          role="presentation"
          onClick={() => setOpen(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="prompt-dialog-title"
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[var(--radius-lg)] bg-canvas p-6 text-body sm:p-8"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            <h3
              id="prompt-dialog-title"
              className="text-2xl font-bold leading-[1.35] text-ink"
            >
              전체 프롬프트
            </h3>
            <p className="mt-2 text-sm font-semibold text-muted">
              {open.chapter}
              {open.section ? ` · ${open.section}` : ""}
              {open.page > 0 ? ` · ${open.page}쪽` : ""}
            </p>
            <pre className="mt-6 whitespace-pre-wrap font-sans text-sm font-semibold leading-[1.6] text-body">
              {open.prompt}
            </pre>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CopyButton text={open.prompt} className="w-full sm:w-auto" />
              <button
                type="button"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-lg)] border border-hairline bg-canvas px-5 py-3 text-sm font-bold text-ink active:border-border-strong sm:w-auto"
                onClick={() => setOpen(null)}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
