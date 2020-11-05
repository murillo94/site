import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import Post from '../../layouts/post';
import { Link } from '../../components/link';
import { H1, H3 } from '../../components/heading';
import { Paragraph } from '../../components/paragraph';
import { Button } from '../../components/button';

const root = process.cwd();
const components = {
  a: props => <Link {...props} isExternal />,
  h1: H1,
  h3: H3,
  p: Paragraph,
  button: Button
};

export default function BlogPost({ mdxSource }) {
  const content = hydrate(mdxSource, { components });

  return <Post>{content}</Post>;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs
      .readdirSync(path.join(root, 'posts'))
      .map(p => ({ params: { slug: p.replace(/\.mdx/, '') } }))
  };
}

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, 'posts', `${params.slug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content);
  return { props: { mdxSource, frontMatter: data } };
}
