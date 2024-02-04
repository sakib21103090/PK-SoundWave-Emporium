import img1 from '../../../../public/banner log.svg'

const Banner = () => {
    return (
        <div className='bg-img text-white relative'>
            <div>
                <h3 className='text-6xl font-semibold max-w-xl leading-normal ml-10 pt-28'>Welcome to SoundWave & AirGlide Emporium</h3>
                
                <p className='max-w-xl ml-10'>Explore the Harmony of Sound and the Grace of Flight at SoundWave & AirGlide Emporium - Your Premier Destination for Audio Excellence and Airborne Adventure!</p>

                <div className='pb-16'>
                <a href="#" className=' bg-lime-400 rounded-2xl p-3 text-black ml-10  font-medium inline-block m-4 hover:bg-transparent hover:border-blue-900 hover:border     hover:text-white duration-300'>Order now</a>
                <a href="#" className=' bg-indigo-500 rounded  p-3 text-black ml-10  font-medium inline-block m-4 hover:bg-transparent hover:border-yellow-900 hover:border   hover:text-white duration-300'>Download App</a>
                </div>
               <img src={img1}  className='w-full xl:w-1/3 xl:absolute bottom-0 right-20 pb-16 ' />
        </div>
        </div>
        
   )};

export default Banner;