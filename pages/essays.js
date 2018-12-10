import Link from 'next/link';
import dayjs from 'dayjs';

import Page from '../layouts/page';
import Back from '../components/back';

import posts from '../data/essays';

export default () => (
  <Page>
    <Back />
    <article>
      <h1>Murillo's Essays</h1>
      <div>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={post.link}>
                <a>
                  <b>{post.title}</b>
                  <span>{dayjs(post.date).format('MMM DD, YYYY')}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>

    <style jsx>
      {`
        article {
          height: 100%;
          line-height: 1.5;
        }

        div {
          margin-bottom: 40px;
        }

        h1 {
          margin: 0 0 40px;
        }

        ul {
          margin: 0;
          padding: 0 0 10px 0;
          list-style: none;
        }

        li {
          margin: 10px 0;
          text-decoration: none;
        }

        li:last-child {
          margin-bottom: 0;
        }

        b {
          font-size: 16px;
          display: inline-block;
          font-weight: normal;
          line-height: 24px;
        }

        span {
          font-size: 13px;
          font-weight: 400;
          color: #aaa;
          margin-left: 12px;
        }

        a:hover b {
          color: #000;
        }

        @media (min-width: 992px) {
          span {
            opacity: 0;
          }

          li {
            margin: 22px 0;
          }

          a:hover span {
            opacity: 1;
          }
        }
      `}
    </style>
  </Page>
);
