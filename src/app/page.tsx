import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-3">
              <div className="flex justify-between items-center">
                  <div className="text-xl font-bold text-gray-800">My Stylish Blog</div>
                  <div className="hidden md:flex items-center space-x-4">
                      <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
                      <a href="#" className="text-gray-800 hover:text-blue-500">About</a>
                      <a href="#" className="text-gray-800 hover:text-blue-500">Contact</a>
                  </div>
              </div>
          </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
          <article className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <img src="https://source.unsplash.com/random/800x400" alt="Blog post image" className="w-full h-64 object-cover"/>
              <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-600 mb-4">Published on October 23, 2024</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="/article" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</a>
              </div>
          </article>

          <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://source.unsplash.com/random/400x300" alt="Blog post image" className="w-full h-48 object-cover"/>
                  <div className="p-6">
                      <h2 className="text-xl font-bold mb-2 text-gray-800">Another Blog Post</h2>
                      <p className="text-gray-600 mb-4">Published on October 20, 2024</p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <a href="/article" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</a>
                  </div>
              </article>

              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://source.unsplash.com/random/400x300" alt="Blog post image" className="w-full h-48 object-cover"/>
                  <div className="p-6">
                      <h2 className="text-xl font-bold mb-2 text-gray-800">Yet Another Post</h2>
                      <p className="text-gray-600 mb-4">Published on October 18, 2024</p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <a href="/article" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Read More</a>
                  </div>
              </article>
          </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-6 text-center">
              <p>&copy; 2024 My Stylish Blog. All rights reserved.</p>
          </div>
      </footer>
    </>
  );
}
