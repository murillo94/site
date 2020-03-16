import React from 'react';
import App from 'next/app';

import Router from 'next/router';
import withGA from 'next-ga';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default withGA('UA-136781679-1', Router)(MyApp);
