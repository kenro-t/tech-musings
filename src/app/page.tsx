import TopArticleCard from "@/components/elements/Card/TopArticleCard";
import ArticleCard from "@/components/elements/Card/ArticleCard";
import CategoryMenu from "@/components/layouts/CategoryMenu";
import RecentPosts from "@/components/layouts/RecentPosts";

export default async function Home() {
  // どこかで一元管理するべき
  const baseUrl = "http://localhost:3000";
  const data = await fetch(`${baseUrl}/api/v1/article`).then((res) => {
    if (!res.ok) {
      // エラーハンドリング
    }

    return res.json();
  });

  // 一番上のコンテンツのみ取り出し
  const topContent = data.contents.shift();

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <TopArticleCard content={topContent} />

            <div className="mt-8 space-y-8">
              {data.contents.map((content) => {
                return <ArticleCard key={content.id} content={content} />;
              })}
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <CategoryMenu />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <RecentPosts />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
