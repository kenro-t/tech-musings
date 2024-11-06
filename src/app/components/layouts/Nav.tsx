import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-200">
              ホーム
            </Link>
          </li>
          <li>
            <Link href="/article" className="hover:text-blue-200">
              記事
            </Link>
          </li>
          <li>
            <Link href="/category" className="hover:text-blue-200">
              カテゴリー
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-200">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
