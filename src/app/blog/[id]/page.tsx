import styles from "../../page.module.css";
import { notFound } from "next/navigation";

// Simulated blog data
const posts = [
  {
    id: "1",
    title: "First Post",
    content: "This is the full content of the first post.",
  },
  {
    id: "2",
    title: "Second Post",
    content: "This is the full content of the second post.",
  },
  {
    id: "3",
    title: "Third Post",
    content: "This is the full content of the third post.",
  },
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);
  if (!post) return notFound();
  return (
    <main className={styles.main}>
      <h1>{post.title}</h1>
      <article>{post.content}</article>
      <p>This page is server-side rendered (SSR) on each request.</p>
    </main>
  );
}
