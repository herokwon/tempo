import LocalFont from 'next/font/local';

import '../styles/globals.css';

const pretendard = LocalFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <head></head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
