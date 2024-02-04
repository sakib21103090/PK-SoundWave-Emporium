import g1 from '../../../../public/Gallerypictures/1.jpg'
import g2 from '../../../../public/Gallerypictures/2.jpg'
import g3 from '../../../../public/Gallerypictures/3.jpg'
import g4 from '../../../../public/Gallerypictures/4.jpg'
import g5 from '../../../../public/Gallerypictures/5.jpg'
import g6 from '../../../../public/Gallerypictures/6.png'
import g7 from '../../../../public/Gallerypictures/7.png'
import g8 from '../../../../public/Gallerypictures/8.png'
import g9 from '../../../../public/Gallerypictures/9.png'
import g10 from '../../../../public/Gallerypictures/10.png'
import g11 from '../../../../public/Gallerypictures/11.png'
import g12 from '../../../../public/Gallerypictures/12.png'

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
        <img className="w-[300px] h-[260px]  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={g6} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">lenovo</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">These headphones have large ear cups that fully enclose the ears. </p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="w-[300px] h-[260px]  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={g7} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">New bee</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">hey are known for their comfort and sound quality</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="w-[300px] h-[260px]  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={g8} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">lazada 10</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">They consist of two earpieces connected by a band</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="w-[300px] h-[260px]  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={g9} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">Setero</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> They are great for use in noisy environments like airplanes or public transit.

</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="w-[300px] h-[260px]  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={g10} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">BHG-300</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">These headphones connect to audio sources via Bluetooth</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>


         <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="w-[300px] h-[260px]  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={g11} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">V5.0 Streo</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">hese headphones are small and lightweight</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="w-[600px] h-[260px] rounded">
        <img className="w-[300px] h-[260px]  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={g12} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">Poly 2.5</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">These headphones have smaller ear cups that rest on the ears rather than fully enclosing them.</p>
        <button className="  bg-lime-400 rounded-2xl p-2 text-black font-small inline-block hover:bg-transparent hover:border-blue-900 hover:border   hover:text-white duration-300">See More</button>
      </div>
    </div>

   

    
    
        {/* Add more images as needed */}
      </div>
        </div>

        
    );
};

export default Gallery;
