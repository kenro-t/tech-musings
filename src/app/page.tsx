import TopArticleCard from "@/app/components/elements/Card/TopArticleCard";
import ArticleCard from "@/app/components/elements/Card/ArticleCard";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <TopArticleCard />

            <div className="mt-8 space-y-8">
              <ArticleCard />
              <ArticleCard />
              <article className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Reactの最新アップデートとその影響
                </h3>
                <p className="text-gray-600 mb-4">
                  React
                  18の新機能と、それがフロントエンド開発にもたらす変化について解説します。
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  続きを読む →
                </a>
              </article>

              <article className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  クラウドネイティブアーキテクチャの基礎
                </h3>
                <p className="text-gray-600 mb-4">
                  マイクロサービス、コンテナ、Kubernetesなど、現代のクラウドアーキテクチャの要となる技術を紹介します。
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  続きを読む →
                </a>
              </article>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                カテゴリー
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    AI & 機械学習
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Web開発
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    クラウドコンピューティング
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    サイバーセキュリティ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    モバイルアプリ開発
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                最新のツイート
              </h4>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <p className="text-gray-600">
                    新しいReactのフックについて解説しました。パフォーマンス改善に役立つこと間違いなし！
                    #React #WebDev
                  </p>
                  <span className="text-sm text-gray-500">2分前</span>
                </div>
                <div className="border-b pb-4">
                  <p className="text-gray-600">
                    明日のウェビナーでは、AIの倫理について議論します。ぜひご参加ください！
                    #AI #Ethics
                  </p>
                  <span className="text-sm text-gray-500">1時間前</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
