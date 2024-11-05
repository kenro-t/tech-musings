import { formatDate } from "@/app/lib/utils";
import CategoryMenu from "@/app/components/layouts/CategoryMenu";
import RecentPosts from "@/app/components/layouts/RecentPosts";

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const baseUrl = "http://localhost:3000";
  const data = await fetch(`${baseUrl}/api/v1/article/${id}`).then((res) => {
    if (!res.ok) {
      // エラーハンドリング
    }

    return res.json();
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/1200x400"
              alt={data.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              {/* タイトル */}
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {data.title}
              </h2>
              <div className="flex items-center text-gray-600 mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Published At: {formatDate(data.publishedAt)}</span>
              </div>

              {/* 本文 */}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: `${data.content}`,
                }}
              />
            </div>
          </article>

          {/* サイドバー */}
          <aside className="md:col-span-1 space-y-8">
            {/* カテゴリー */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <CategoryMenu />
            </div>

            {/* 最近の投稿 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <RecentPosts />
            </div>
          </aside>
        </div>

        {/* 関連記事セクション */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                AI倫理：技術の発展と人間性の共存
              </h4>
              <p className="text-gray-600 mb-4">
                AIの進化に伴う倫理的課題と、それに対する取り組みについて解説します。
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                読む →
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                機械学習エンジニアになるためのロードマップ
              </h4>
              <p className="text-gray-600 mb-4">
                AI時代に求められる機械学習エンジニアになるための学習パスを紹介します。
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                読む →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
