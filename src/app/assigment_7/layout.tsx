import Link from "next/link";

export default function Assignment7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/assigment_7/login">Login</Link>
          </li>
          <li>
            <Link href="/assigment_7/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/assigment_7/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
