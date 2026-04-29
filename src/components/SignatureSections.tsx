export function SignatureSections() {
  return (
    <section id="workflow" className="bg-canvas px-6 pb-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[var(--radius-lg)] bg-signature-forest p-8 text-on-primary sm:p-12">
          <p className="text-sm font-medium leading-[1.35] opacity-80">
            Production apps in prototype speed
          </p>
          <h2 className="mt-6 max-w-2xl text-[32px] font-normal leading-[1.2] text-on-primary sm:text-[40px]">
            아이디어에서 업로드까지, 프롬프트를 제작 단계별로 고릅니다.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-[1.6] opacity-85">
            긴 목록을 뒤지는 대신 장과 절, 검색어로 필요한 문장을 좁힙니다.
            카드는 차분하게, 액션은 명확하게 배치했습니다.
          </p>
          <a
            href="#prompts"
            className="mt-8 inline-flex min-h-12 items-center rounded-[var(--radius-lg)] bg-canvas px-6 py-4 text-base font-medium text-ink"
          >
            프롬프트 보드 열기
          </a>
        </article>

        <div className="grid gap-6">
          <article className="rounded-[var(--radius-md)] bg-signature-peach p-6 text-ink">
            <h3 className="text-xl font-normal leading-[1.5]">기획</h3>
            <p className="mt-3 text-sm leading-[1.5] text-body">
              영상 주제, 시청자 문제, 훅 문장을 빠르게 정리합니다.
            </p>
          </article>
          <article className="rounded-[var(--radius-md)] bg-signature-cream p-6 text-ink">
            <h3 className="text-xl font-normal leading-[1.5]">제작</h3>
            <p className="mt-3 text-sm leading-[1.5] text-body">
              대본, 쇼츠 변환, 제목 후보를 복사해서 이어 붙입니다.
            </p>
          </article>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl rounded-[var(--radius-lg)] bg-surface-dark p-8 text-on-primary sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <h2 className="text-[32px] font-normal leading-[1.2] sm:text-[40px]">
            제작 시간을 줄이고, 검토할 여백을 남기세요.
          </h2>
          <p className="text-sm leading-[1.6] opacity-80">
            이 사이트는 화려한 배경보다 읽기 쉬운 표와 분명한 복사 버튼에
            집중합니다. 한 화면에 하나의 핵심 액션만 남겨, 작업자가 다음 단계로
            바로 이동할 수 있게 했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
