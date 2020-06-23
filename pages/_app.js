import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import withGA from 'next-ga';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Murillo de Miranda Pereira</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default withGA('UA-136781679-1', Router)(MyApp);
