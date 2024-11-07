import { extractTags, truncateContent } from "@/lib/utils";
import Link from "next/link";

export default function ArticleCard({ content }) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{content.title}</h3>
      <p className="text-gray-600 mb-4">
        {truncateContent(extractTags(content.content))}
      </p>
      <Link
        href={`/article/${content.id}`}
        className="text-blue-600 hover:underline"
      >
        続きを読む →
      </Link>
    </article>
  );
}
