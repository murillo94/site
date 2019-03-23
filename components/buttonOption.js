export default ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}

    <style jsx>{`
      button {
        float: right;
        clear: both;
        font-size: 18px;
        font-weight: bold;
        margin-top: 20px;
        padding: 0;
        background-color: #eee;
        border-radius: 100%;
        box-shadow: none;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
        will-change: auto;
        width: 2.6em;
        height: 2.6em;
        cursor: pointer;
        user-select: none;
      }

      @media (min-width: 768px) {
        button {
          font-size: 22px;
        }

        button:hover {
          background-color: #dedede;
          transform: scale(1.15);
        }
      }

      @media print {
        button {
          display: none;
        }
      }
    `}</style>
  </button>
);
