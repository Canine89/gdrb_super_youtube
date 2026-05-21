import type { AdData, EventAd, StoreAd } from "@/lib/types";

type Props = {
  data: AdData;
};

const STORE_STYLES: Record<string, string> = {
  교보문고:
    "bg-[#4DAC27] text-white shadow-[0_8px_20px_rgba(77,172,39,0.28)] active:bg-[#3f911f]",
  예스24:
    "bg-[#0080FF] text-white shadow-[0_8px_20px_rgba(0,128,255,0.28)] active:bg-[#0066CC]",
  알라딘:
    "bg-[#1D80C3] text-white shadow-[0_8px_20px_rgba(29,128,195,0.28)] active:bg-[#156ca8]",
};

const STORE_OUTLINE: Record<string, string> = {
  교보문고: "border-[#4DAC27] text-[#4DAC27] active:bg-[#4DAC27]/10",
  예스24: "border-[#0080FF] text-[#0080FF] active:bg-[#0080FF]/10",
  알라딘: "border-[#1D80C3] text-[#1D80C3] active:bg-[#1D80C3]/10",
};

function SaleButton({ store }: { store: StoreAd }) {
  const cls =
    STORE_STYLES[store.name] ??
    "bg-ink text-white shadow-[0_8px_20px_rgba(36,36,36,0.18)]";
  return (
    <a
      href={store.saleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-lg)] px-4 py-3 text-sm font-bold leading-[1.3] ${cls}`}
    >
      {store.name} 구매
    </a>
  );
}

function LectureButton({ store }: { store: StoreAd }) {
  const cls =
    STORE_OUTLINE[store.name] ??
    "border-ink text-ink active:bg-ink/5";
  return (
    <a
      href={store.lectureUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-lg)] border-2 bg-canvas px-4 py-3 text-sm font-bold leading-[1.3] ${cls}`}
    >
      {store.name} 특강
    </a>
  );
}

function EventCard({ event }: { event: EventAd }) {
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-[var(--radius-md)] border border-youtube/40 bg-youtube/10 p-4 text-sm font-bold leading-[1.45] text-ink active:bg-youtube/15"
    >
      <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-youtube">
        이벤트
      </span>
      <span className="mt-2 block whitespace-pre-wrap">{event.title}</span>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-link">
        자세히 보기 →
      </span>
    </a>
  );
}

function RailHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-youtube">
        {kicker}
      </p>
      <h3 className="mt-1 text-base font-bold leading-[1.3] text-ink">
        {title}
      </h3>
    </div>
  );
}

export function AdRails({ data }: Props) {
  const { stores, events } = data;
  if (stores.length === 0 && events.length === 0) return null;

  return (
    <>
      <aside
        aria-label="판매 링크"
        className="pointer-events-none fixed left-6 top-24 z-30 hidden w-[200px] flex-col gap-4 2xl:flex"
      >
        <div className="pointer-events-auto flex flex-col gap-4 rounded-[var(--radius-lg)] border border-hairline bg-canvas p-5 shadow-[0_18px_40px_rgba(36,36,36,0.08)]">
          <RailHeader kicker="Buy" title="도서 구매" />
          <div className="flex flex-col gap-2">
            {stores.map((store) => (
              <SaleButton key={`sale-${store.name}`} store={store} />
            ))}
          </div>
        </div>
        {events.length > 0 ? (
          <div className="pointer-events-auto flex flex-col gap-3">
            {events.map((event) => (
              <EventCard key={`event-${event.title}`} event={event} />
            ))}
          </div>
        ) : null}
      </aside>

      <aside
        aria-label="특강 링크"
        className="pointer-events-none fixed right-6 top-24 z-30 hidden w-[200px] flex-col gap-4 2xl:flex"
      >
        <div className="pointer-events-auto flex flex-col gap-4 rounded-[var(--radius-lg)] border border-hairline bg-canvas p-5 shadow-[0_18px_40px_rgba(36,36,36,0.08)]">
          <RailHeader kicker="Lecture" title="저자 특강" />
          <div className="flex flex-col gap-2">
            {stores.map((store) => (
              <LectureButton key={`lec-${store.name}`} store={store} />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export function AdStack({ data }: Props) {
  const { stores, events } = data;
  if (stores.length === 0 && events.length === 0) return null;

  return (
    <section
      aria-label="구매 및 특강 링크"
      className="border-t border-dashed border-hairline bg-surface-soft px-5 py-7 sm:px-8 sm:py-9 lg:px-10 2xl:hidden"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {stores.length > 0 ? (
          <div className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-hairline bg-canvas p-5">
            <RailHeader kicker="Buy" title="도서 구매" />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {stores.map((store) => (
                <SaleButton key={`sale-stack-${store.name}`} store={store} />
              ))}
            </div>
          </div>
        ) : null}
        {stores.length > 0 ? (
          <div className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-hairline bg-canvas p-5">
            <RailHeader kicker="Lecture" title="저자 특강" />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {stores.map((store) => (
                <LectureButton key={`lec-stack-${store.name}`} store={store} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {events.length > 0 ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {events.map((event) => (
            <EventCard key={`event-stack-${event.title}`} event={event} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
