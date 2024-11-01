import Image from "next/image";

import TopArticleCard from "./components/layouts/TopArticleCard";
import ArticleCard from "./components/layouts/ArticleCard";

export default async function Home() {
  // エラーハンドリングは今度書く
  // const res = await fetch("http://localhost:3000//api/v1/article?limit=3", { method: 'GET', cache: 'no-store'})
  // const data = await res.json()

  // // debug
  // // console.log(data)

  // // トップ記事用に1つ配列から取り出す
  // const topContent = data.contents.shift()

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
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
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
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

              <div className="mt-8 space-y-8">
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
    </>
  );
}
