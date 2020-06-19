import dayjs from "dayjs";

import Page from "../layouts/page";
import { H1, H3 } from "../components/heading";
import { Paragraph } from "../components/paragraph";
import { Link } from "../components/link";

import posts from "../data/posts";

export default () => (
  <Page>
    <H1>Articles</H1>
    <Paragraph>
      I write about all the tech, most of the time JavaScript, Node.js, React,
      design system and a11y.
    </Paragraph>
    <article>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <H3>
                <Link href={post.link} isExternal>
                  {post.title}
                </Link>
              </H3>
              <span>{dayjs(post.date).format("MMM DD, YYYY")}</span>
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
          margin: 0 -10px;
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
          padding: 0 10px;
        }

        @media (min-width: 992px) {
          li {
            margin: 22px 0;
          }
        }
      `}
    </style>
  </Page>
);
