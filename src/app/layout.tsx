import type { Metadata } from "next";
import "pretendard/dist/web/static/pretendard.css";
import "./globals.css";

const metadataBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: "유튜브 AI 비서 고용하기 · 프롬프트 Copy&Paste",
  description:
    "도서 『유튜브 AI 비서 고용하기』 동반 자료—프롬프트를 장·절·쪽수로 찾아 바로 복사하세요.",
  openGraph: {
    title: "유튜브 AI 비서 고용하기 · 프롬프트 Copy&Paste",
    description:
      "검색하고, 고르고, 복사해서 바로 쓰는 유튜브 자동화 프롬프트 모음.",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/cover.png", width: 518, height: 665, alt: "유튜브 AI 비서 고용하기 표지" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "유튜브 AI 비서 고용하기 · 프롬프트 Copy&Paste",
    description:
      "검색하고, 고르고, 복사해서 바로 쓰는 유튜브 자동화 프롬프트 모음.",
    images: ["/cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
