import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to the Next.js App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/assignment1">Assignment 1: Data Fetching</Link>
          </li>
          <li>
            <Link href="/blog">Blog Listing (ISR)</Link>
          </li>
        </ul>
      </nav>
      <p>This homepage is statically generated (SSG).</p>
    </main>
  );
}
