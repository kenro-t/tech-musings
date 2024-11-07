import { extractTags, truncateContent } from "@/lib/utils";
import Link from "next/link";

export default function TopArticleCard({ content }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://via.placeholder.com/800x400"
        alt="記事のサムネイル"
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {content.title}
        </h2>
        <p className="text-gray-600 mb-4">
          {truncateContent(extractTags(content.content))}
        </p>
        <Link
          href={`/article/${content.id}`}
          className="text-blue-600 hover:underline"
        >
          続きを読む →
        </Link>
      </div>
    </article>
  );
}
