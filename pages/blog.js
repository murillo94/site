import dayjs from 'dayjs';

import { Page } from '../layouts/page';
import { H1, H3 } from '../components/heading';
import { Paragraph } from '../components/paragraph';
import { Link } from '../components/link';

import posts from '../data/posts';

const Blog = () => {
  const descPosts = posts.sort(
    (a, b) => dayjs(b.date).unix() - dayjs(a.date).unix()
  );

  return (
    <Page>
      <H1>Articles</H1>
      <Paragraph>
        I write about tech, most of the time JavaScript, Node.js, React, design
        system and a11y.
      </Paragraph>
      <article>
        <div>
          <ul>
            {descPosts.map(post => (
              <li key={post.id}>
                <H3>
                  <Link href={post.link} isExternal>
                    {post.title}
                  </Link>
                </H3>
                <span>{dayjs(post.date).format('MMM DD, YYYY')}</span>
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
            margin: 0 -0.625rem;
          }

          div {
            margin-bottom: 2.5rem;
          }

          ul {
            margin: 0;
            padding: 0 0 0.625rem 0;
            list-style: none;
          }

          li {
            margin: 0.625rem 0;
            text-decoration: none;
          }

          li:last-child {
            margin-bottom: 0;
          }

          b {
            font-size: 1rem;
            font-weight: normal;
            line-height: 1.6;
            display: inline-block;
          }

          span {
            font-size: 0.8125rem;
            font-weight: 400;
            color: #aaa;
            padding: 0 0.625rem;
          }

          @media only screen and (max-width: 37.5rem) {
            article {
              margin: 0;
            }

            span {
              padding: 0;
            }
          }

          @media only screen and (min-width: 62rem) {
            li {
              margin: 1.375rem 0;
            }
          }
        `}
      </style>
    </Page>
  );
};

export default Blog;
