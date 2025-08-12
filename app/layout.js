import { Sofia_Sans_Condensed } from 'next/font/google';
import './globals.css';

const sofia_sans = Sofia_Sans_Condensed({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '400', '600', '800'],
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata = {
  title: 'BalkanaTry',
  description:
    'Balkana web application, routes in Central Stara planina mountain, around Tryavna routes, paths, track, trails',
  keywords:
    'Balkana, Stara planina mountain, Tryavna, routes, trails, paths, mountain running, cycling, hiking, web application',

  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'BalkanaTry',
    description:
      'Discover routes and trails in Stara planina mountain around Tryavna',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${sofia_sans.className} antialiased min-h-screen flex flex-col`}
      >
        <main className='w-full'>{children}</main>
      </body>
    </html>
  );
}
