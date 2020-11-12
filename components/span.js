export const Span = ({ children }) => (
  <span>
    {children}

    <style jsx>
      {`
        span {
          font-size: 0.875rem;
          font-weight: 400;
          color: #aaa;
        }
      `}
    </style>
  </span>
);
