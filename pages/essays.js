import dayjs from "dayjs";

import Page from "../layouts/page";
import { Heading } from "../components/heading";
import { Paragraph } from "../components/paragraph";
import { Link } from "../components/link";

import posts from "../data/essays";

export default () => (
  <Page>
    <Heading>Articles</Heading>
    <Paragraph>
      I write about all the tech, most of the time JavaScript, Node.js, React,
      design system and a11y.
    </Paragraph>
    <article>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={post.link} isExternal>
                <a>
                  <b>{post.title}</b>
                  <span>{dayjs(post.date).format("MMM DD, YYYY")}</span>
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
          line-height: 1.6;
        }

        div {
          margin-bottom: 40px;
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
          font-weight: normal;
          line-height: 1.6;
          display: inline-block;
        }

        span {
          font-size: 13px;
          font-weight: 400;
          color: #aaa;
          margin-left: 5px;
        }

        a {
          border-radius: 6px;
        }

        a:hover b {
          color: #000;
        }

        @media (min-width: 992px) {
          span {
            opacity: 0;
            margin-left: 12px;
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
