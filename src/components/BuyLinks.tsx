import { BUY_LINKS } from "@/lib/links";

const items = [
  {
    key: "yes24",
    label: "YES24",
    href: BUY_LINKS.yes24,
    className:
      "bg-[#0080FF] text-white shadow-[0_8px_20px_rgba(0,128,255,0.28)] active:bg-[#0066CC]",
  },
  {
    key: "kyobo",
    label: "교보문고",
    href: BUY_LINKS.kyobo,
    className:
      "bg-[#4DAC27] text-white shadow-[0_8px_20px_rgba(77,172,39,0.28)] active:bg-[#3f911f]",
  },
  {
    key: "aladin",
    label: "알라딘",
    href: BUY_LINKS.aladin,
    className:
      "bg-[#1D80C3] text-white shadow-[0_8px_20px_rgba(29,128,195,0.28)] active:bg-[#156ca8]",
  },
] as const;

export function BuyLinks() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {items.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-lg)] px-6 py-4 text-base font-bold leading-[1.4] sm:w-auto ${item.className}`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
