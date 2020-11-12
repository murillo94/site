import React from 'react';
import Router from 'next/router';
import withGA from 'next-ga';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default withGA('UA-136781679-1', Router)(App);
