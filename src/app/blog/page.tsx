import Link from "next/link";
import styles from "../page.module.css";

// Simulated blog data
async function getPosts() {
  // In a real app, fetch from a CMS or database
  return [
    { id: "1", title: "First Post", summary: "This is the first post." },
    { id: "2", title: "Second Post", summary: "This is the second post." },
    { id: "3", title: "Third Post", summary: "This is the third post." },
  ];
}

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <h1>Blog Listing (ISR)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <strong>{post.title}</strong>
            </Link>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
      <p>
        This page uses Incremental Static Regeneration (ISR) and updates every
        minute.
      </p>
    </main>
  );
}
