export const Span = ({ children, className }) => (
  <span className={className}>
    {children}

    <style jsx>
      {`
        span {
          font-size: 0.875rem;
          font-weight: 400;
          color: #757575;
        }
      `}
    </style>
  </span>
);
