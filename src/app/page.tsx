import Image from "next/image";

import TopArticleCard from "./components/layouts/TopArticleCard";
import ArticleCard from "./components/layouts/ArticleCard";

export default async function Home() {
    // エラーハンドリングは今度書く
    const res = await fetch("http://localhost:3000//api/v1/article?limit=3", { method: 'GET', cache: 'no-store'})
    const data = await res.json()

    // debug
    // console.log(data)

    // トップ記事用に1つ配列から取り出す
    const topContent = data.contents.shift()

    return (
        <main className="container mx-auto px-6 py-8">
            {<TopArticleCard content={topContent} />}
            <div className="grid md:grid-cols-2 gap-8">
                {data.contents.map(content => <ArticleCard content={content} />)}
            </div>
        </main>
    );
}
