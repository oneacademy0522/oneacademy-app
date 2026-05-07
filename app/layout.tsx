import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "원아카데미",
  description: "학원 매매 전문 플랫폼 - 반값 수수료",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#1a237e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="원아카데미" />
        <link rel="apple-touch-icon" href="/icon-512.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
