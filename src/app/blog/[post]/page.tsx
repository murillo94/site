import { promises as fs } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

import { MdxContent } from '@/components/mdx-content';
import { InternalLinkNav } from '@/components/internal-link-nav/internal-link-nav';
import styles from './page.module.css';

import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { Metadata } from 'next';

interface Response {
  params: {
    post: string;
  };
}

type Frontmatter = {
  slug: string;
  title: string;
  description: string;
  author: string;
  site: string;
  date: string;
};

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

function formatArticleTitle(title: string) {
  return title
    .replace(/-/g, ' ')
    .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

export async function generateMetadata({
  params
}: Response): Promise<Metadata> {
  const { post } = params;
  const formattedTitle = formatArticleTitle(post);

  return {
    title: `${formattedTitle}`,
    description: "Murillo's blog - frontend & indie maker.",
    openGraph: {
      title: `${formattedTitle}`,
      description: "Murillo's blog - frontend & indie maker.",
      url: `https://murillodmiranda.com/${post}`,
      siteName: 'murillodmiranda',
      locale: 'en-US',
      type: 'article',
      authors: ['Murillo de Miranda Pereira']
    },
    twitter: {
      card: 'summary_large_image',
      title: `${formattedTitle}`,
      description: "Murillo's blog - frontend & indie maker.",
      creator: '@murillodmiranda'
    },
    alternates: {
      canonical: `https://murillodmiranda.com/${post}`
    }
  };
}

async function getPost(
  title: Response['params']['post']
): Promise<Post<Frontmatter>> {
  const directory = path.join(process.cwd(), 'blog');
  const raw = await fs.readFile(`${directory}/${title}.mdx`, 'utf-8');

  const serialized = await serialize(raw, {
    parseFrontmatter: true
  });

  const frontmatter = serialized.frontmatter as Frontmatter;

  return {
    frontmatter,
    serialized
  };
}

export default async function Page({ params }: Response) {
  const { serialized, frontmatter } = await getPost(params.post);

  return (
    <>
      <header>
        <InternalLinkNav
          links={[
            { slug: '/blog', name: 'blog' },
            { slug: '/resume', name: 'resume' }
          ]}
        />
      </header>
      <article className={styles.article}>
        <div>
          <h1>{frontmatter.title}</h1>
          <p className={styles.description}>
            {frontmatter.author} • {frontmatter.date}
          </p>
        </div>
        <section className={styles.content}>
          <MdxContent source={serialized} />
        </section>
      </article>
    </>
  );
}
