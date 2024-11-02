export default function TopArticleCard() {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://via.placeholder.com/800x400"
        alt="記事のサムネイル"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          最新のAI技術が変える未来の働き方
        </h2>
        <p className="text-gray-600 mb-4">
          人工知能の進化により、私たちの仕事環境は大きく変わろうとしています。本記事では、AIが職場にもたらす変革と、それに伴う課題について深掘りします。
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          続きを読む →
        </a>
      </div>
    </article>
  );
}
