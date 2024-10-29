import { extractTags, formatDate, truncateContent } from '@/app/lib/utils';

export default function ArticleCard({ content }) {
    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <img src="https://source.unsplash.com/random/800x400" alt="Blog post image" className="w-full h-64 object-cover"/>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{content.title}</h2>
                <p className="text-gray-600 mb-4">Published on {formatDate(content.createdAt)}</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    {truncateContent(extractTags(content.content))}
                </p>
                <a href="/article" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</a>
            </div>
        </article>
    );
}