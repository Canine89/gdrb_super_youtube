import type { AdData, EventAd, StoreAd } from "@/lib/types";

type Props = {
  data: AdData;
};

const STORE_STYLES: Record<
  string,
  { fill: string; outline: string; accent: string }
> = {
  교보문고: {
    fill: "bg-[#4DAC27] text-white shadow-[0_8px_20px_rgba(77,172,39,0.28)] active:bg-[#3f911f]",
    outline: "border-[#4DAC27] text-[#4DAC27] active:bg-[#4DAC27]/10",
    accent: "text-[#4DAC27]",
  },
  예스24: {
    fill: "bg-[#0080FF] text-white shadow-[0_8px_20px_rgba(0,128,255,0.28)] active:bg-[#0066CC]",
    outline: "border-[#0080FF] text-[#0080FF] active:bg-[#0080FF]/10",
    accent: "text-[#0080FF]",
  },
  알라딘: {
    fill: "bg-[#1D80C3] text-white shadow-[0_8px_20px_rgba(29,128,195,0.28)] active:bg-[#156ca8]",
    outline: "border-[#1D80C3] text-[#1D80C3] active:bg-[#1D80C3]/10",
    accent: "text-[#1D80C3]",
  },
};

const FALLBACK_STYLE = {
  fill: "bg-ink text-white shadow-[0_8px_20px_rgba(36,36,36,0.18)]",
  outline: "border-ink text-ink active:bg-ink/5",
  accent: "text-ink",
};

function StoreCard({ store }: { store: StoreAd }) {
  const style = STORE_STYLES[store.name] ?? FALLBACK_STYLE;
  return (
    <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-hairline bg-canvas p-5">
      <p
        className={`text-sm font-bold leading-[1.3] tracking-[0.02em] ${style.accent}`}
      >
        {store.name}
      </p>
      <div className="flex flex-col gap-2">
        <a
          href={store.saleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-lg)] px-4 py-3 text-sm font-bold leading-[1.3] ${style.fill}`}
        >
          도서 구매
        </a>
        <a
          href={store.lectureUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-lg)] border-2 bg-canvas px-4 py-3 text-sm font-bold leading-[1.3] ${style.outline}`}
        >
          저자 특강 신청
        </a>
      </div>
    </div>
  );
}

function EventBanner({ event }: { event: EventAd }) {
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-4 rounded-[var(--radius-lg)] border border-youtube/40 bg-youtube/10 p-5 text-left active:bg-youtube/15 sm:items-center"
    >
      <div className="flex flex-col gap-1">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-youtube">
          진행 중 이벤트
        </span>
        <span className="text-sm font-bold leading-[1.45] text-ink sm:text-base">
          {event.title}
        </span>
      </div>
      <span className="shrink-0 text-sm font-bold text-link group-active:text-link-active">
        자세히 →
      </span>
    </a>
  );
}

export function AdBand({ data }: Props) {
  const { stores, events } = data;
  if (stores.length === 0 && events.length === 0) return null;

  return (
    <section
      aria-label="구매 및 특강 링크"
      className="border-t border-dashed border-hairline bg-surface-soft px-5 py-7 sm:px-8 sm:py-9 lg:px-10"
    >
      <div className="flex flex-col gap-3 border-b border-hairline pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold leading-[1.35] tracking-[0.16px] text-youtube">
            구매 & 특강
          </p>
          <h2 className="mt-2 text-[24px] font-bold leading-[1.2] text-ink sm:text-[28px]">
            서점에서 책과 특강을 만나보세요
          </h2>
        </div>
        <p className="max-w-md text-sm font-semibold leading-[1.6] text-body">
          원하는 서점을 골라 도서 구매 또는 저자 특강 신청 페이지로 이동하세요.
        </p>
      </div>

      {stores.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <StoreCard key={store.name} store={store} />
          ))}
        </div>
      ) : null}

      {events.length > 0 ? (
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {events.map((event) => (
            <EventBanner key={event.title} event={event} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
