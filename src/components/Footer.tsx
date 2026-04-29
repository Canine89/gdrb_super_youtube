import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="mt-auto bg-canvas px-6 pb-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[var(--radius-lg)] bg-surface-strong p-8 sm:p-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-[32px] font-normal leading-[1.2] text-ink">
                필요한 프롬프트를 바로 찾아보세요.
              </h2>
              <p className="mt-3 text-sm leading-[1.6] text-body">
                시트가 갱신되면 사이트도 최대 약 60초 안에 반영됩니다.
              </p>
            </div>
            <a
              href="#prompts"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-lg)] bg-primary px-6 py-4 text-base font-medium text-on-primary shadow-button active:bg-primary-active sm:w-auto"
            >
              프롬프트 찾기
            </a>
          </div>
        </section>

        <div className="grid gap-8 border-t border-hairline pt-10 mt-12 md:grid-cols-[1fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-md text-sm leading-[1.6] text-muted">
              본 사이트는 골든래빗 도서의 프롬프트를 더 빠르게 활용하기 위한
              검색·복사 보조 페이지입니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm text-muted sm:grid-cols-3">
            <div>
              <p className="font-medium text-ink">Platform</p>
              <a className="mt-3 block" href="#prompts">
                Prompt board
              </a>
            </div>
            <div>
              <p className="font-medium text-ink">Resources</p>
              <a className="mt-3 block" href="#workflow">
                Workflow
              </a>
            </div>
            <div>
              <p className="font-medium text-ink">Store</p>
              <a className="mt-3 block" href="#buy">
                Buy links
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
