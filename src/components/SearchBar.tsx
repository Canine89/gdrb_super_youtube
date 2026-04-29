type Props = {
  query: string;
  onQueryChange: (q: string) => void;
  chapter: string;
  onChapterChange: (c: string) => void;
  chapters: string[];
};

export function SearchBar({
  query,
  onQueryChange,
  chapter,
  onChapterChange,
  chapters,
}: Props) {
  const fieldClass =
    "min-h-12 w-full rounded-[var(--radius-md)] border border-hairline bg-surface-soft px-4 py-3 text-sm font-semibold leading-[1.25] text-ink outline-none focus:border-youtube focus:bg-canvas focus:ring-2 focus:ring-youtube/20";

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end">
      <div className="flex-1">
        <label
          htmlFor="search"
          className="mb-2 block text-sm font-bold leading-[1.35] tracking-[0.16px] text-muted"
        >
          검색
        </label>
        <input
          id="search"
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="장, 절, 쪽수, 프롬프트 내용..."
          className={fieldClass}
        />
      </div>
      <div className="w-full md:max-w-xs">
        <label
          htmlFor="chapter"
          className="mb-2 block text-sm font-bold leading-[1.35] tracking-[0.16px] text-muted"
        >
          장 필터
        </label>
        <select
          id="chapter"
          value={chapter}
          onChange={(e) => onChapterChange(e.target.value)}
          className={fieldClass}
        >
          <option value="">전체</option>
          {chapters.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
