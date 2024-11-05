import TopArticleCard from "@/app/components/elements/Card/TopArticleCard";
import ArticleCard from "@/app/components/elements/Card/ArticleCard";
import CategoryMenu from "@/app/components/layouts/CategoryMenu";
import RecentPosts from "@/app/components/layouts/RecentPosts";

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
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
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
