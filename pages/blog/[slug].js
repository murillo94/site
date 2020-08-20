import Post from '../../layouts/post';

import { getPostsSlugs, getPostBySlug } from '../../utils/posts';

export default function PostPage(data) {
  return <Post {...data} />;
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  return { props: postData };
}
