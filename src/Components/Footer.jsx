export default function Footer(){

return(
        <footer className="bg-[#05475E] text-white w-full y-0 px-6 py-8  bottom-0 left-0 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
        
            <div>
            <h2 className="text-2xl font-bold mb-4">ShelterConnect</h2>
            <p className="text-sm text-gray-200">
                Empowering safe, affordable housing with verified listings, smart tools, and community trust.
            </p>
            </div>

            
            <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Buy</a></li>
                <li><a href="#" className="hover:text-white">Rent</a></li>
                <li><a href="#" className="hover:text-white">Post a Listing</a></li>
            </ul>
            </div>

            
            <div>
            <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
            <p className="text-gray-200 text-sm mb-2"> support@shelterconnect.in</p>
            <p className="text-gray-200 text-sm"> Bengaluru, India</p>
            </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-300 border-t border-gray-600 pt-4">
            © {new Date().getFullYear()} ShelterConnect. All rights reserved.
        </div>
        </footer>
    );
}