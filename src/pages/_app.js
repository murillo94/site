import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import withGA from 'next-ga';
import { ThemeProvider } from 'next-themes';

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default withGA('UA-136781679-1', Router)(App);
