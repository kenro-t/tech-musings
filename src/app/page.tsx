import Image from "next/image";

import TopArticleCard from "./components/layouts/TopArticleCard";
import ArticleCard from "./components/layouts/ArticleCard";

export default function Home() {
  return (
      <main className="container mx-auto px-6 py-8">
          <TopArticleCard />
          <div className="grid md:grid-cols-2 gap-8">
            <ArticleCard />
            <ArticleCard />
          </div>
      </main>
  );
}
