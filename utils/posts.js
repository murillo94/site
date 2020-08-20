import matter from 'gray-matter';
import dayjs from 'dayjs';
import fs from 'fs';

export const getPostsFolders = () => {
  const postsFolders = fs
    .readdirSync(`${process.cwd()}/posts`)
    .map(folderName => ({
      filename: `${folderName}`
    }));

  return postsFolders;
};

export const getFormattedDate = date => dayjs(date).format('MMM DD, YYYY');

export const getSortedPosts = () => {
  const postFolders = getPostsFolders();

  const posts = postFolders
    .map(({ filename }) => {
      const markdownWithMetadata = fs
        .readFileSync(`posts/${filename}`)
        .toString();

      const { data, excerpt, content } = matter(markdownWithMetadata);

      const frontmatter = {
        ...data,
        date: getFormattedDate(data.date)
      };

      const slug = filename.replace('.md', '');

      return {
        slug,
        frontmatter,
        excerpt,
        content
      };
    })
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return posts;
};

export const getPostsSlugs = () => {
  const postFolders = getPostsFolders();

  const paths = postFolders.map(({ filename }) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));

  return paths;
};

export const getPostBySlug = slug => {
  const posts = getSortedPosts();

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug);

  const { frontmatter, content, excerpt } = posts[postIndex];

  return { frontmatter, post: { content, excerpt } };
};
