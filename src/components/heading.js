export const H1 = ({ children }) => (
  <h1>
    {children}

    <style jsx global>
      {`
        h1 {
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 3.6rem;
          margin-bottom: 2rem;
        }
      `}
    </style>
  </h1>
);

export const H2 = ({ children }) => (
  <h2>
    {children}

    <style jsx>
      {`
        h2 {
          font-size: 2.4rem;
          font-weight: 600;
          line-height: 3.2rem;
          margin-bottom: 2rem;
        }
      `}
    </style>
  </h2>
);

export const H3 = ({ children }) => (
  <h3>
    {children}

    <style jsx>
      {`
        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 2.3rem;
          margin-bottom: 2rem;
        }
      `}
    </style>
  </h3>
);

export const H4 = ({ children }) => (
  <h4>
    {children}

    <style jsx>
      {`
        h4 {
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 2rem;
          margin-bottom: 2rem;
        }
      `}
    </style>
  </h4>
);

export const H5 = ({ children }) => (
  <h5>
    {children}

    <style jsx>
      {`
        h5 {
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.8rem;
          margin-bottom: 2rem;
        }
      `}
    </style>
  </h5>
);
