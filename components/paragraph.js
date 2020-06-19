export const Paragraph = ({ children }) => (
  <p>
    {children}

    <style jsx>
      {`
        p {
          margin-bottom: 32px;
        }
      `}
    </style>
  </p>
);
