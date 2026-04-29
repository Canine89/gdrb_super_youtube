export function BrandMark() {
  return (
    <div
      className="flex min-w-0 items-center gap-3"
      aria-label="유튜브 AI 비서 고용하기"
    >
      <div
        className="flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-youtube"
        aria-hidden
      >
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
          <path
            d="M13 7.268c.6.347.6 1.117 0 1.464l-12 6.928c-.6.346-1.35-.087-1.35-1.732V2c0-1.645.75-2.078 1.35-1.732l12 6.928Z"
            fill="white"
          />
        </svg>
      </div>
      <span className="truncate text-sm font-bold tracking-[0.01em] text-ink sm:text-base sm:whitespace-normal">
        유튜브 AI 비서 고용하기
      </span>
    </div>
  );
}
