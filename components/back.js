import Link from 'next/link';

export default ({ to = '/' }) => (
  <div>
    <Link href={to}>
      <a>↩︎</a>
    </Link>

    <style jsx>{`
      div {
        float: right;
        clear: both;
        margin: 0;
      }

      a {
        font-size: 18px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eee;
        border-radius: 100%;
        transition: all 0.2s;
        will-change: auto;
        width: 2.6em;
        height: 2.6em;
      }

      @media (min-width: 768px) {
        div {
          margin-top: 20px;
        }

        a {
          font-size: 22px;
        }

        a:hover {
          background-color: #dedede;
          transform: scale(1.15);
        }
      }

      @media print {
        a {
          display: none;
        }
      }
    `}</style>
  </div>
);
