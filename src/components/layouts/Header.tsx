import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <Link href="/">
          <h1 className="text-3xl font-bold text-gray-800">Tech Innovators</h1>
        </Link>
        <p className="text-gray-600 mt-2">最新の技術トレンドと洞察</p>
      </div>
    </header>
  );
}
