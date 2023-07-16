'use client';
import 'styles/globals.css';

// export const metadata = {
//   title: 'Stack-Knowledge',
//   description: '',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
