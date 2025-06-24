export default function Header() {
  return (
    <header className="bg-[#1B4965] p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <h1 className="text-4xl font-bold text-white">
          Shelter<span className="text-pink-400">Connect</span>
        </h1>

        
        <nav className="space-x-6">
          <a href="#" className="text-gray-200 text-2xl hover:text-pink-500 ">
            Home
          </a>
          <a href="#" className="text-gray-200 text-2xl hover:text-pink-500 ">
            Buy
          </a>
          <a href="#" className="text-gray-200 text-2xl hover:text-pink-500 ">
            Rent
          </a>
          <a href="#" className="text-white bg-pink-600 px-4 py-2 rounded hover:bg-pink-700 transition">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
