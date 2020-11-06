/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content="Murillo de Miranda Pereira" itemProp="name" />
          <meta
            content="A cool guy that coding and loves UI design."
            itemProp="description"
          />

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="A cool guy that coding and loves UI design."
          />

          <meta property="og:title" content="Murillo de Miranda Pereira" />
          <meta property="og:url" content="https://murillodmiranda.com/" />
          <meta
            property="og:image"
            content="https://murillodmiranda.com/images/logo.svg"
          />
          <meta property="og:site_name" content="Murillo de Miranda Pereira" />
          <meta
            property="og:description"
            content="A cool guy that coding and loves UI design."
          />

          <meta name="twitter:site" content="@murillodmiranda" />
          <meta name="twitter:creator" content="@murillodmiranda" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="A cool guy that coding and loves UI design."
          />
          <meta name="twitter:title" content="Murillo de Miranda Pereira" />
          <meta name="twitter:image" content="https://murillodmiranda.com/" />

          <link rel="icon" href="images/logo.svg" />
          <link rel="alternate icon" href="images/logo.png" />
          <link rel="mask-icon" href="images/logo.svg" color="#1a202c" />

          <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                    "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                    "Noto Color Emoji", sans-serif;
                  -webkit-font-smoothing: antialiased;
                  font-size: 1rem;
                  line-height: 1.6;
                  margin: 0;
                  height: 100%;
                  transition: background-color 0.3s ease;
                }

                body.light-mode {
                  background-color: #fff;
                  color: #1a202c;
                }

                body.dark-mode {
                  background-color: #1a202c;
                  color: #e2e8f0;
                }

                body.dark-mode a:hover,
                body.dark-mode button:hover {
                  color: #1a1919 !important;
                }

                main {
                  padding: 2rem 1rem;
                  max-width: 42rem;
                  margin: 0 auto;
                  box-sizing: border-box;
                }

                code {
                  font-size: 1.1rem;
                  background-color: #efefef;
                  border-radius: 3px;
                  padding: 0 5px;
                }

                body.dark-mode code {
                  background-color: #000;
                 }

                ::selection {
                  background-color: #ffe166 !important;
                }

                :focus {
                  outline: 0 !important;
                  border-color: #2684ff !important;
                  box-shadow: 0 0 0 0.125rem #2684ff !important;
                }

                @media only screen and (max-width: 37.5rem) {
                  main {
                    padding: 2rem 1.25rem 0;
                  }
                }

                @media print {
                  @page {
                    size: auto;
                    margin: 0;
                  }

                  body {
                    margin: 0.5cm;
                  }

                  header {
                    display: none !important;
                  }

                  main {
                    padding: 0.625rem 1.25rem;
                    max-width: 100%;
                  }

                  footer {
                    display: none !important;
                  }
                }
              `
            }}
          />
        </Head>
        <body>
          <script src="no-flash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
