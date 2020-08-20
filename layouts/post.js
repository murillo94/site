export default function Post({ frontmatter, post }) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      {post.content}
    </div>
  );
}
