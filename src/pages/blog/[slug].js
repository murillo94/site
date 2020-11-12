import { useRef } from 'react';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import Post from '@layouts/post';

import { Link } from '@components/link';
import { H1, H2, H3, H4, H5 } from '@components/heading';
import { Paragraph } from '@components/paragraph';
import { Button } from '@components/button';
import { Ol, Ul } from '@components/list';

import useReadingTime from '@utils/use-reading-time';

const root = process.cwd();
const components = {
  a: props => <Link {...props} isExternal isNormal />,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  p: Paragraph,
  button: Button,
  ol: Ol,
  ul: Ul
};

export default function BlogPost({ mdxSource, frontMatter }) {
  const post = useRef();
  const content = hydrate(mdxSource, { components });
  const { readingTime } = useReadingTime(post);
  const { title, description, slug, author, site, date } = frontMatter;

  return (
    <>
      <Post
        ref={post}
        post={{ title, description, slug, readingTime }}
        author={{ name: author, site, date }}
      >
        {content}
      </Post>
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs
      .readdirSync(path.join(root, 'src/posts'))
      .map(p => ({ params: { slug: p.replace(/\.mdx/, '') } }))
  };
}

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, 'src/posts', `${params.slug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content);
  return { props: { mdxSource, frontMatter: data } };
}
