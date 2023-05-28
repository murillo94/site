import './globals.css';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import styles from './layout.module.css';

const inter = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata = {
  title: 'murillodmiranda',
  description:
    'Murillo de Miranda Pereira - Interested in frontend, indie maker scene, design systems, and a11y.',
  openGraph: {
    title: 'murillodmiranda',
    description: 'Murillo de Miranda Pereira - frontend & indie maker.',
    url: 'https://murillodmiranda.com',
    siteName: 'murillodmiranda',
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'murillodmiranda',
    description: 'Murillo de Miranda Pereira - frontend & indie maker.',
    creator: '@murillodmiranda'
  },
  appleWebApp: {
    title: 'murillodmiranda',
    statusBarStyle: 'default'
  },
  applicationName: 'murillodmiranda',
  keywords:
    'frontend, indie maker, indie maker scene, design systems, a11y, accessibility',
  verification: {
    google: '0O22KoukhDNTYGhVOkCyTr6nUeald0sUkQkQ6-oyq48'
  },
  robots: {
    follow: true,
    index: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>{children}</main>
      </body>
      <Analytics />
    </html>
  );
}
