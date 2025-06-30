import React from "react";

// Server Component with time-based revalidation
export default async function ServerFetch() {
  // Time-based revalidation: 30 seconds
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 30 },
  });
  const users = await res.json();

  return (
    <div>
      <h2>Server Component: Users (revalidates every 30s)</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
