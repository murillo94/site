export const Ol = ({ children }) => (
  <ol>
    {children}

    <style jsx global>
      {`
        ol {
          margin-bottom: 2rem;
        }

        ol li p {
          margin-bottom: 1.5rem !important;
        }

        ol + ul {
          padding-left: 5rem;
        }
      `}
    </style>
  </ol>
);

export const Ul = ({ children }) => (
  <ul>
    {children}

    <style jsx global>
      {`
        ul {
          padding-left: 2rem;
          margin-bottom: 2rem;
        }

        li {
          margin-bottom: 0.5rem;
        }
      `}
    </style>
  </ul>
);
