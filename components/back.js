import Link from 'next/link';

export default ({ to = '/' }) => (
  <div>
    <Link href={to}>
      <a>↩︎</a>
    </Link>

    <style jsx>{`
      div {
        float: right;
        margin-top: 20px;
      }

      a {
        font-size: 18px;
        font-weight: bold;
        background-color: #eee;
        padding: 10px;
        border-radius: 30px;
        transition: all 0.2s;
      }

      @media (min-width: 768px) {
        a {
          font-size: 22px;
          padding: 15px;
        }

        a:hover {
          background-color: #dedede;
        }
      }
    `}</style>
  </div>
);
