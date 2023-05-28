import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';

import { InternalLinkNav } from '@/components/internal-link-nav/internal-link-nav';

import styles from './page.module.css';

type Frontmatter = {
  slug: string;
  title: string;
  description: string;
  author: string;
  site: string;
  date: string;
  language: string;
};

type Post<TFrontmatter> = {
  posts: TFrontmatter;
};

async function getPosts(): Promise<Post<Frontmatter[]>> {
  const directory = path.join(process.cwd(), 'blog');
  const files = fs.readdirSync(directory);

  let readPosts = [];

  for (const file of files) {
    const raw = fs.readFileSync(`${directory}/${file}`, {
      encoding: 'utf-8'
    });

    const serialized = await serialize(raw, {
      parseFrontmatter: true
    });

    const frontmatter = serialized.frontmatter as Frontmatter;

    readPosts.push(frontmatter);
  }

  const posts = readPosts.sort((a, b) =>
    +new Date(a.date) > +new Date(b.date) ? -1 : 1
  );

  return {
    posts
  };
}

export const metadata = {
  title: 'blog - tech and another things'
};

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <>
      <div>
        <h1>blog</h1>
        <p>tech and another things</p>
      </div>
      <section>
        <ul className={styles.list}>
          {posts.map((item, index) => (
            <li key={index}>
              <h2>
                <Link href={`/blog/${item.slug}`}>{item.title}</Link>
              </h2>
              <p className={styles.description}>
                {item.date} | {item.language}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <InternalLinkNav
          links={[
            { slug: '/', name: 'home' },
            { slug: '/resume', name: 'resume' }
          ]}
        />
      </footer>
    </>
  );
}
