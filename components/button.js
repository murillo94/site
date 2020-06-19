export const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}

    <style jsx>{`
       {
        font-size: 18px;
        color: inherit;
        background-color: transparent;
        border-radius: 6px;
        padding: 5px 10px;
        box-shadow: none;
        border: none;
        transition: background-color 0.1s;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        float: right;
        clear: both;
        will-change: auto;
      }

      :hover {
        background-color: #efefef;
      }

      @media print {
         {
          display: none;
        }
      }
    `}</style>
  </button>
);
