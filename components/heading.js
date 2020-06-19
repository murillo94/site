export const Heading = ({ children }) => (
  <h1>
    {children}

    <style jsx>
      {`
        h1 {
          font-size: 48px;
          font-weight: 700;
        }
      `}
    </style>
  </h1>
);
