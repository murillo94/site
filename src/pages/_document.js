/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="../../images/logo.svg" />
          <link rel="alternate icon" href="../../images/logo.png" />
          <link rel="mask-icon" href="../../images/logo.svg" color="#1a202c" />

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

                :root {
                  background-color: #fff;
                  color: #1a202c;
                }

                [data-theme='dark'] {
                  background-color: #1a202c;
                  color: #e2e8f0;
                }

                [data-theme='dark'] a:hover,
                [data-theme='dark'] button:hover {
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
                  border-radius: 0.25rem;
                  padding: 0.03rem 0.25rem;
                }

                [data-theme='dark'] code {
                  background-color: #000;
                }

                [data-theme='dark'] span {
                  color: #9ca3af !important;
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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
