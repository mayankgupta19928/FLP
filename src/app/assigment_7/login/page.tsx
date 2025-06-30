"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    document.cookie = "auth=true; path=/";
    router.push("/assigment_7/dashboard");
  }

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
