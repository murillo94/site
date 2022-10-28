import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-site-verification"
        content="0O22KoukhDNTYGhVOkCyTr6nUeald0sUkQkQ6-oyq48"
      />
    </Head>
    <Component {...pageProps} />
    <Analytics />
  </ThemeProvider>
);

export default App;
