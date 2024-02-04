import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navbar  fixed z-10 bg-opacity-30 bg-slate-900 max-w-screen-2xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn bg-white lg:hidden btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold bg-white rounded-box w-52">
          <li><NavLink className='text-black' to="/">Home</NavLink> </li>
          <li><Link className='text-black' to="/AllToys">All Product</Link> </li>
          <li><Link className='text-black' to="/AddAToy">Add A Product</Link> </li>
          <li><Link className='text-black' to="/MyToy">My Product</Link> </li>
          <li><Link className='text-black' to="/Blog">Privacy</Link> </li>
          
          </ul>
        </div>
        <img  className="w-[45px] m-2 lg:w-[30px] rotate-45" src="../../../../public/logoshop.svg " alt="" />
        <a className="text-white font-bold  normal-case text-xl  ">PK SoundWave Emporium</a>
        
      </div>

      <div className="navbar-center  hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-2 ">
        <li><NavLink className='text-white  font-semibold' to="/">Home</NavLink> </li>
          <li><Link className='text-white font-semibold' to="/All Product">All Product</Link> </li>
          <li><Link className='text-white font-semibold' to="/Add A Product">Add A Product</Link> </li>
          <li><Link className='text-white font-semibold' to="/My Product">My Product</Link> </li>
          <li><Link className='text-white font-semibold' to="/Privacy">Privacy</Link> </li>
        </ul>
      </div>
      <div>     
      </div>
      <div className=" navbar-end">
      <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <a className="justify-between">
          Profile
        </a>
      </li>
      <li><a>Logout</a></li>
    </ul>
  </div>
      </div>
    </div>
    );
};

export default Navbar;