# 유튜브 비서 · 프롬프트 복붙 사이트

Google 스프레드시트에 정리된 **장 / 절 / 쪽수 / 프롬프트**를 불러와, 검색·필터 후 **복사** 버튼으로 바로 쓸 수 있는 Next.js 단일 페이지입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 디자인

- 참조 프로젝트 `gdrb_gemini_gongnyan`의 기능 구조를 따릅니다.
- 시각 시스템은 `design.md`에 맞춰 Airtable 계열의 흰 캔버스, near-black CTA, coral/forest/dark signature card, cream callout 리듬을 적용했습니다.
- 색상·라운드·타이포 토큰은 `src/app/globals.css`의 Tailwind v4 `@theme`에 정의되어 있습니다.

## 데이터

스프레드시트 CSV URL은 `src/lib/sheets.ts`에서 관리합니다. 시트가 공개되어 있으면 페이지는 최대 약 60초 내에 갱신됩니다.
