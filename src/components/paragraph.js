export const Paragraph = ({ children }) => (
  <p>
    {children}

    <style jsx>
      {`
        p {
          margin-bottom: 2rem;
        }
      `}
    </style>
  </p>
);
