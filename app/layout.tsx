import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "원아카데미",
  description: "학원 매매 전문 플랫폼 - 매도수수료 무료",
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
        <style>{`
          #splash-screen {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: #1a237e;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
          }
          #splash-screen.hide {
            opacity: 0;
            pointer-events: none;
          }
          #splash-screen img {
            width: 120px;
            height: 120px;
            border-radius: 24px;
            margin-bottom: 20px;
          }
          #splash-screen .title {
            color: white;
            font-size: 24px;
            font-weight: 900;
            letter-spacing: -0.5px;
            font-family: sans-serif;
          }
          #splash-screen .subtitle {
            color: #b8d4f0;
            font-size: 13px;
            margin-top: 8px;
            font-family: sans-serif;
          }
        `}</style>
      </head>
      <body>
        <div id="splash-screen">
          <img src="/icon-512.png" alt="원아카데미" />
          <div className="title">원아카데미</div>
          <div className="subtitle">학원 매매 전문 플랫폼</div>
        </div>
        <script dangerouslySetInnerHTML={{__html: `
          window.addEventListener('load', function() {
            setTimeout(function() {
              var splash = document.getElementById('splash-screen');
              if (splash) {
                splash.classList.add('hide');
                setTimeout(function() {
                  splash.style.display = 'none';
                }, 500);
              }
            }, 1500);
          });
        `}} />
        {children}
      </body>
    </html>
  );
}
