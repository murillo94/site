import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Page } from '@/layouts/page';
import { H1, H2 } from '@/components/heading';
import { Paragraph } from '@/components/paragraph';
import { Span } from '@/components/span';
import { Link } from '@/components/link';

const root = process.cwd();

export async function getStaticProps() {
  const contentRoot = path.join(root, 'src/posts');
  const posts = fs.readdirSync(contentRoot).map(p => {
    const content = fs.readFileSync(path.join(contentRoot, p), 'utf8');
    return {
      slug: p.replace(/\.mdx/, ''),
      content,
      frontMatter: matter(content).data
    };
  });
  return { props: { posts } };
}

const Blog = ({ posts }) => (
  <Page>
    <H1>Articles</H1>
    <Paragraph>
      I write about tech, most of the time JavaScript, Node.js, React, design
      system and a11y.
    </Paragraph>
    <article>
      <div>
        <ul>
          {posts.map(data => (
            <li key={data.slug}>
              <H2>
                <Link href="/blog/[slug]" as={`blog/${data.slug}`}>
                  {data.frontMatter.title}
                </Link>
              </H2>
              <Span>{data.frontMatter.date}</Span>
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

        :global(span) {
          padding: 0 0.5rem !important;
        }

        :global(h2) {
          font-size: 1.5rem !important;
          font-weight: 600 !important;
          line-height: 2.3rem !important;
          margin-bottom: 0 !important;
        }

        @media only screen and (max-width: 37.5rem) {
          article {
            margin: 0;
          }

          :global(span) {
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

export default Blog;
