import { useRef } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import Post from '@/layouts/post';

import { Link } from '@/components/link';
import { H1, H2, H3, H4, H5 } from '@/components/heading';
import { Paragraph } from '@/components/paragraph';
import { Button } from '@/components/button';
import { Ol, Ul } from '@/components/list';

import useReadingTime from '@/utils/use-reading-time';

const root = process.cwd();
const components = {
  a: props => (
    <Link {...props} target="_blank" rel="noopener noreferrer" isNormal />
  ),
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

export default function BlogPost({ source, frontMatter }) {
  const post = useRef();
  const { readingTime } = useReadingTime(post);
  const { title, description, slug, author, site, date } = frontMatter;

  return (
    <>
      <Post
        ref={post}
        post={{ title, description, slug, readingTime }}
        author={{ name: author, site, date }}
      >
        <MDXRemote {...source} components={components} />
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
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  return { props: { source: mdxSource, frontMatter: data } };
}
