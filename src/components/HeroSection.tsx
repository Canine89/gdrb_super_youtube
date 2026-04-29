import Image from "next/image";
import { BuyLinks } from "./BuyLinks";
import { Typewriter } from "./Typewriter";

export function HeroSection() {
  return (
    <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-11">
        <div className="mb-5 flex flex-wrap gap-2">
          {["유튜브 운영할 때", "댓글 관리가 힘들 때", "구독자 분석하고 싶을 때"].map((label) => (
            <span
              key={label}
              className="rounded-full border border-dashed border-youtube/50 bg-cover-red-soft px-3 py-1 text-xs font-bold text-youtube"
            >
              {label}
            </span>
          ))}
        </div>

        <p className="text-sm font-bold leading-snug tracking-wide text-muted">
          프롬프트 이지 Copy&Paste
        </p>
        <h1 className="mt-3 max-w-[28rem] text-[34px] font-bold leading-[1.08] tracking-tight text-ink sm:text-[44px] lg:text-[52px]">
          유튜브 <span className="text-youtube">AI</span>
          <br className="hidden sm:block" /> 비서 고용하기
        </h1>
        <Typewriter
          className="mt-5 max-w-2xl text-[15px] font-semibold leading-[1.65] text-body"
          lines={[
            "도서와 함께 보면 좋은 복붙 프롬프트 사이트입니다.",
            "타이핑하느라 고생하지 마세요.",
            "복붙하세요.",
          ]}
        />

        <div id="buy" className="mt-6">
          <BuyLinks />
        </div>

      </div>

      <div className="flex items-center justify-center border-t border-hairline bg-[linear-gradient(135deg,#333333_0%,#333333_52%,#f5f5f5_52%,#ffffff_100%)] px-5 py-7 sm:px-8 lg:border-l lg:border-t-0 lg:px-7">
        <figure className="w-[190px] shrink-0 sm:w-[220px] lg:w-[244px]">
          <div className="overflow-hidden rounded-[var(--radius-md)] bg-canvas shadow-[0_18px_36px_rgba(0,0,0,0.22)] ring-1 ring-black/10">
            <Image
              src="/cover.png"
              alt="『유튜브 AI 비서 고용하기』 도서 표지"
              width={518}
              height={665}
              priority
              className="h-auto w-full"
            />
          </div>
        </figure>
      </div>
    </div>
  );
}
