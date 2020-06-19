import Head from "next/head";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default ({ children }) => (
  <>
    <Head>
      <title>Murillo de Miranda Pereira</title>

      <meta content="Murillo de Miranda Pereira" itemProp="name" />
      <meta
        content="A cool guy that coding and loves UI design."
        itemProp="description"
      />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="A cool guy that coding and loves UI design."
      />

      <meta property="og:title" content="Murillo de Miranda Pereira" />
      <meta property="og:url" content="https://murillodmiranda.com/" />
      <meta
        property="og:image"
        content="https://murillodmiranda.com/images/icon.png"
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

      <link rel="apple-touch-icon" href="images/icon.png" />
      <link rel="icon" href="images/icon.png" type="image/png" />
    </Head>

    <Header />
    <main>{children}</main>
    <Footer />

    <style jsx global>
      {`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji", sans-serif;
          -webkit-font-smoothing: antialiased;
          font-size: 16px;
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
          padding: 32px 16px;
          max-width: 720px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        ::selection {
          background-color: #ffe166;
        }

        :focus {
          outline: 0;
          border-color: #2684ff;
          box-shadow: 0 0 0 2px #2684ff;
        }

        @media only screen and (max-width: 600px) {
          main {
            padding: 32px 20px 0;
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
            display: none;
          }

          main {
            padding: 10px 20px;
            max-width: 100%;
          }

          footer {
            display: none;
          }
        }
      `}
    </style>
  </>
);
