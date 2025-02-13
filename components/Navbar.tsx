import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">My Blog</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
}