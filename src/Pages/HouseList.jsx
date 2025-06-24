import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import L from 'leaflet';



export default function HouseList() {
    L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
  });
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query); // 🔍 you can implement filter logic here
  };

  return (
    <section className="mt-[170px] ">
      
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
        <div className="w-full max-w-xl">
          <form onSubmit={handleSearch} className="flex rounded-[20px] shadow-lg overflow-hidden">
            <input
              type="text"
              className="w-full px-4 py-3 text-gray-700 focus:outline-none"
              placeholder="Search by location, name, or type..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 hover:bg-pink-600 transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        <div className="ml-4">
          <button className="bg-violet-600 px-4 py-2 rounded text-white font-bold">
            + Add Listing
          </button>
        </div>
      </div>

      {/* Map configuration is done here  */}
      <div className="w-full max-w-6xl h-[500px] border-2 border-cyan-950 p-2 rounded-[20px] mt-[100px] overflow-hidden shadow-lg mx-auto">
        <MapContainer center={[12.9716, 77.5946]} zoom={13} scrollWheelZoom={true} className="h-full w-full z-10">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Example Marker */}
          <Marker position={[12.9716, 77.5946]}>
            <Popup>
              🏠 Sample House<br />Bengaluru, India
            </Popup>
          </Marker>
        </MapContainer>
      </div>

     
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-[40px] lg:text-[48px] font-bold font-serif text-left mb-8 text-black">
          <span className="font-bold text-[50px] text-[#05475E]">&gt;&gt;&gt;</span> All Available Houses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        </div>
      </div>
    </section>
  );
}
