export const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}

    <style jsx>
      {`
         {
          font-size: 1.125rem;
          color: inherit;
          background-color: transparent;
          border-radius: 0.375rem;
          padding: 0.3125rem 0.625rem;
          box-shadow: none;
          border: none;
          transition: background-color 0.1s;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        :hover {
          background-color: #efefef;
        }

        @media print {
           {
            display: none;
          }
        }
      `}
    </style>
  </button>
);
