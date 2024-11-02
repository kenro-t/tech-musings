const ArticleListPage = () => {
  // 記事データの配列（実際の実装ではAPIから取得するなど）
  const articles = [
    { id: 1, title: "最新のAI技術が変える未来の働き方", excerpt: "人工知能の進化により、私たちの仕事環境は大きく変わろうとしています。本記事では、AIが職場にもたらす変革と、それに伴う課題について深掘りします。", date: "2024-11-01", category: "AI & 機械学習" },
    { id: 2, title: "Reactの最新アップデートとその影響", excerpt: "React 18の新機能と、それがフロントエンド開発にもたらす変化について解説します。Suspense、Concurrent Mode、そして新しいフックの詳細を探ります。", date: "2024-10-28", category: "Web開発" },
    { id: 3, title: "クラウドネイティブアーキテクチャの基礎", excerpt: "マイクロサービス、コンテナ、Kubernetesなど、現代のクラウドアーキテクチャの要となる技術を紹介します。スケーラビリティと柔軟性を実現する方法を学びましょう。", date: "2024-10-25", category: "クラウドコンピューティング" },
    { id: 4, title: "サイバーセキュリティ：最新の脅威と対策", excerpt: "日々進化するサイバー攻撃の手法と、それに対する最新の防御策について詳しく解説します。組織と個人がとるべき安全対策とは？", date: "2024-10-22", category: "サイバーセキュリティ" },
    { id: 5, title: "5G時代のモバイルアプリ開発", excerpt: "5Gネットワークの普及に伴い、モバイルアプリ開発はどのように変化するのか？高速・大容量通信を活かした次世代アプリの可能性を探ります。", date: "2024-10-19", category: "モバイルアプリ開発" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">最新の記事</h2> {/* カテゴリー: */}
            {articles.map(article => (
              <article key={article.id} className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  <a href="#" className="hover:text-blue-600">{article.title}</a>
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{article.date}</span>
                  <span className="mx-2">|</span>
                  <span>{article.category}</span>
                </div>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a href="#" className="text-blue-600 hover:underline">続きを読む →</a>
              </article>
            ))}

            {/* ページネーション */}
            <div className="flex justify-center mt-8">
              <nav className="inline-flex rounded-md shadow">
                <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  前へ
                </a>
                <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-blue-600 hover:bg-blue-50">
                  1
                </a>
                <a href="#" className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  3
                </a>
                <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  次へ
                </a>
              </nav>
            </div>
          </div>

          {/* サイドバー */}
          <aside className="md:col-span-1 space-y-8">
            {/* カテゴリーセクション */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">カテゴリー</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 hover:underline">AI & 機械学習</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Web開発</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">クラウドコンピューティング</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">サイバーセキュリティ</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">モバイルアプリ開発</a></li>
              </ul>
            </div>

            {/* 最近のツイートセクション */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">最近のツイート</h4>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <p className="text-gray-600">新しいReactのフックについて解説しました。パフォーマンス改善に役立つこと間違いなし！ #React #WebDev</p>
                  <span className="text-sm text-gray-500">10分前</span>
                </div>
                <div className="border-b pb-4">
                  <p className="text-gray-600">明日のウェビナーでは、AIの倫理について議論します。ぜひご参加ください！ #AI #Ethics</p>
                  <span className="text-sm text-gray-500">30分前</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
};

export default ArticleListPage;