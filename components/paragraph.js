export const Paragraph = ({ children }) => (
  <p>
    {children}

    <style jsx>
      {`
         {
          margin-bottom: 32px;
        }
      `}
    </style>
  </p>
);
