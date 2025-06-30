import Link from "next/link";

export default function Assignment7Home() {
  return (
    <main>
      <h1>Assignment 7: Middleware Demo</h1>
      <ul>
        <li>
          <Link href="/assigment_7/login">Login</Link>
        </li>
        <li>
          <Link href="/assigment_7/dashboard">Dashboard (protected)</Link>
        </li>
        <li>
          <Link href="/assigment_7/profile">Profile (protected)</Link>
        </li>
      </ul>
      <p>
        Try accessing protected routes without logging in, and see the
        middleware in action!
      </p>
    </main>
  );
}
