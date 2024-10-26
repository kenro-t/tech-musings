export default function Header() {
    return (
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
    );
}