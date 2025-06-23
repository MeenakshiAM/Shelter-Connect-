import house from '../assets/house.jpg'
export default function Home(){
    return(
        <div className='bg-[#f8fafc]  left-0 min-h-screen w-[100%]'>
        <section className='pb-[100px] mb-10'>
            <div className="mt-[5em] pt-14 text-black  flex justify-between font-serif">
                <div className='pr-[20px]'>
                <p className='text-justify text-[40px] pl-2 pb-8'>Your one-stop destination for finding affordable homes to rent or buy verified, secure, and community - powered. From private apartments to dormitories and co-living spaces, Shelter Connect helps you find the perfect place that fits your needs and budget.</p>
                <div>
                    <button className='p-[15px]   bg-[#7192BE] shadow-lg text-[40px] rounded-xl text-white hover:scale-105 hover:shadow-lg hover:bg-[#05475E] '>Get Started - </button>
                
                </div>
                </div>
                <img src={house} alt="house" className='w-[600px] h-[800px] pl-[20px] rounded'/>
            </div>
        </section>


        <section className="py-10 px-1 bg-[#f8fafc]">
            <div>
                <h2 className="text-[48px] font-bold font-serif text-left mb-8 text-black">
                <span className='font-bold text-[50px] text-[#05475E]'>&gt;&gt;&gt;</span> Why Choose Us?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-[#127686]">Affordable Housing</h3>
                    <p className="text-gray-600 text-justify">
                        We connect you with verified low-cost rental options and government housing schemes to make finding a home easier.
                    </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-[#127686]">Secure Buyer–Seller Chat</h3>
                    <p className="text-gray-600 text-justify">
                        Talk directly with sellers or brokers using our in-app chat that protects privacy while allowing real-time negotiations.
                    </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-[#127686]">Real-Time Distance to Schools, Hospitals & Police</h3>
                    <p className="text-gray-600 text-justify">
                         Instantly see distances to hospitals, schools, malls, and police stations for every listed property — all powered by smart maps.
                    </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-[#127686]">AI-based Price Predictions (Coming Soon!)
                    </h3>
                    <p className="text-gray-600 text-justify">
                        Get intelligent price forecasts for any property based on historical trends and local market data — coming soon to help you invest smarter.
                    </p>
                    </div>
            </div>

        </div>
            
        </section>
        </div>
    );
}