import Head from 'next/head';

export default ({ children, center = false }) => (
  <main>
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
        content="https://murillodmiranda.com/static/icon.png"
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

      <link rel="apple-touch-icon" href="../static/icon.png" />
      <link rel="icon" href="../static/icon.png" type="image/png" />
    </Head>

    {children}

    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, Arial, Helvetica Neue,
          sans-serif;
        -webkit-font-smoothing: antialiased;
        height: 100%;
        margin: 0;
        color: #454545;
      }

      body > div:first-child,
      #__next,
      #__next > div,
      #__next > div > div {
        height: 100%;
      }

      main {
        padding: 30px;
        height: ${center ? '100vh' : '100%'};
        box-sizing: border-box;
      }

      h1 {
        font-size: 31px;
        font-weight: 400;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      ::selection {
        background: #ffe166;
      }

      :focus {
        outline: 0 !important;
        border-color: #2684ff !important;
        box-shadow: 0 0 0 2.2px #2684ff !important;
        transition: box-shadow 0.12s;
      }

      @media (min-width: 768px) {
        main {
          padding: 35px 45px;
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
      }
    `}</style>
  </main>
);
