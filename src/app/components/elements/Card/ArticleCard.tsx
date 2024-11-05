import { extractTags, truncateContent } from "@/app/lib/utils";

export default function ArticleCard({ content }) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{content.title}</h3>
      <p className="text-gray-600 mb-4">
        {truncateContent(extractTags(content.content))}
      </p>
      <a href={`/article/${content.id}`} className="text-blue-600 hover:underline">
        続きを読む →
      </a>
    </article>
  );
}
