import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#FFF7F3] border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Mother Era
        </Link>

        <div className="flex gap-6 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/experts">Experts</Link>
          <Link href="/premium">Premium</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
