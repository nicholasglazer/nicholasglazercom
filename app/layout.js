/* eslint-disable @next/next/no-head-element */
import {Inter} from '@next/font/google';

const inter = Inter({weight:'400'});

export default function RootLayout({children}) {
  return (
    <html className={inter.className}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
