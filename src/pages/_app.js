import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import withGA from 'next-ga';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default withGA('UA-136781679-1', Router)(App);
