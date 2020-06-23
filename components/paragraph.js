export const Paragraph = ({ children }) => (
  <p>
    {children}

    <style jsx>
      {`
         {
          margin-bottom: 2rem;
        }
      `}
    </style>
  </p>
);
