// import ClientComp from "../_components/ClientComp";
import { extractTags, formatDate, truncateContent } from '@/app/lib/utils';

export default async function article({ params }) {
    // エラーハンドリングは今度書く
    const res = await fetch(`http://localhost:3000//api/v1/article/${params.id}`, { method: 'GET', cache: 'no-store'})
    const content = await res.json()

    // debug
    // console.log(content)

    return (
        <>
        {/* <ClientComp /> */}
            <main className="container mx-auto px-6 py-8">
                <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://source.unsplash.com/random/1200x400" alt="Blog post image" className="w-full h-96 object-cover"/>
                    <div className="p-8">
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">{content.title}</h1>
                        <div className="flex items-center text-gray-600 mb-6">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                            </svg>
                            <span>Published on {formatDate(content.createdAt)}</span>
                        </div>
                        <div
                            className="prose max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: `${(content.content)}`,
                            }}
                        />
                    </div>
                </article>

                {/* <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">Comments</h3>
                    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                        <div className="flex items-center mb-4">
                            <img src="https://source.unsplash.com/random/40x40" alt="User avatar" className="w-10 h-10 rounded-full mr-4"/>
                            <div>
                                <h4 className="font-bold">John Doe</h4>
                                <p className="text-gray-600 text-sm">October 24, 2024</p>
                            </div>
                        </div>
                        <p className="text-gray-700">Great article! I really enjoyed reading it and learned a lot.</p>
                    </div>
                </div> */}
            </main>
        </>
    )
}