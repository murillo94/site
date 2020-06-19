export const H1 = ({ children }) => (
  <h1>
    {children}

    <style jsx>
      {`
         {
          font-size: 48px;
          font-weight: 700;
        }
      `}
    </style>
  </h1>
);

export const H3 = ({ children }) => (
  <h3>
    {children}

    <style jsx>
      {`
         {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 0;
        }
      `}
    </style>
  </h3>
);
