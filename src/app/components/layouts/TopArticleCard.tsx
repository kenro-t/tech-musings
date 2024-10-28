export default function TopArticleCard({ content }) {
    // content.contentからhtmlのタグを取り出す
    // const articleContent = new DOMParser().parseFromString(content.content, 'text/html')
    // TODO:
    const extractTags = (htmlString) => {
        return htmlString.replace(/<[^>]*>/g, '');
    }

    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <img src="https://source.unsplash.com/random/800x400" alt="Blog post image" className="w-full h-64 object-cover"/>
              <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">{content.title}</h2>
                  <p className="text-gray-600 mb-4">Published on October 23, 2024</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {extractTags(content.content)}
                  </p>
                  <a href={"/article/" + content.id} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</a>
              </div>
          </article>
    );
}