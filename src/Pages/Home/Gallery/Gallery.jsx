import g1 from '../../../../public/Gallerypictures/1.jpg'
import g2 from '../../../../public/Gallerypictures/2.jpg'
import g3 from '../../../../public/Gallerypictures/3.jpg'
import g4 from '../../../../public/Gallerypictures/4.jpg'
import g5 from '../../../../public/Gallerypictures/5.jpg'
const Gallery = () => {
   
    return (
        <div className="ga-img " >
            <div>
                <h4 className="text-center font-bold text-white text-5xl  p-6">Trending Products</h4>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-14 ">

        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="w-[300px] h-[260px] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={g1} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">Waa M10</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">The large-capacity charging box can not only charge the earphones</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
       <div className="w-[600px] h-[260px] ">
        <img className=" w-[300px] h-[260px]  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 " src={g2}  alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">TWS SHB2515 </h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">rue Wireless Earbuds with 110+ Hr Playtime, Voice Assistant Bluetooth Headset</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="w-[300px] h-[260px] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={g3 } alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">M28 TWS </h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> M18  Gaming Headsets Sports Waterproof for iPhone Android</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="w-[300px] h-[260px] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={g4} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">M19 TWS</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">LM19 TWS Bluetooth Earbuds Touch Control Wireless Bluetooth 5.1 Headphones With Microphone </p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="w-[300px] h-[260px] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={g5} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">Oppo Enco</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Backbeat Fit Green - Running Bluetooth Headphones</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../../../../public/p2.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">headphone1</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../../../../public/p2.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">headphone1</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../../../../public/p2.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">headphone1</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../../../../public/p2.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">headphone1</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../../../../public/p2.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">headphone1</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>


         <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../../../../public/p2.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">headphone1</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../../../../public/p2.jpg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">headphone1</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

   

    
    
        {/* Add more images as needed */}
      </div>
        </div>

        
    );
};

export default Gallery;
