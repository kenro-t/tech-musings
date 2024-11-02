export default function Nav() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-blue-200">
              ホーム
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              記事
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              カテゴリー
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-200">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
