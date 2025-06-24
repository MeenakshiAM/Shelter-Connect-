export default function Footer() {
  return (
    <footer className="bg-[#05475E] text-white w-full px-16 py-10 min-w-screen">
      {/* FIX: Wrap content in a max-w + center container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold mb-4">ShelterConnect</h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Empowering safe, affordable housing with verified listings, smart tools, and community trust.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Buy</a></li>
              <li><a href="#" className="hover:text-white transition">Rent</a></li>
              <li><a href="#" className="hover:text-white transition">Post a Listing</a></li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-200 text-sm mb-2">support@shelterconnect.in</p>
            <p className="text-gray-200 text-sm">Bengaluru, India</p>
          </div>
        </div>

        {/* Footer bottom line */}
        <div className="mt-10 text-center text-xs text-gray-300 border-t border-gray-600 pt-4">
          © {new Date().getFullYear()} ShelterConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
