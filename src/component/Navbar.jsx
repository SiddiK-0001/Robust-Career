import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const links = 
    <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/profile">My Profile</NavLink>
    <NavLink to="/about">About Us</NavLink>
   
    </>
    return (
        <div className="text-white pt-3">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu font-semibold menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            
                        </ul>
                    </div>
                    <a className="font-bold text-4xl"><span className="text-[#FFD700] text-5xl">R</span>obust Career</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-3 font-semibold text-lg menu-horizontal px-1">
                    {links}
                            
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="/login" className="btn bg-[#FFD700] font-bold border-none text-lg">Log in</NavLink>
                </div>
            </div>

            <div className="text-center mt-14">
                <p className="text-5xl font-bold">"Building Your Future with <span className="text-[#FFD700] text-6xl">Confidence</span>"</p>
            <p className="mt-3 w-3/5 mx-auto text-slate-200 text-sm">"Unlock your full potential with <span className="text-[#FFD700]  text-lg">Robust Career</span>, the ultimate career counseling platform. Whether you're a student, a fresh graduate, or a professional exploring new horizons, we provide personalized guidance, expert advice, and powerful tools to help you navigate your career journey. Take the first step toward a brighter future today!"</p>
            </div>
        </div>
    );
};

export default Navbar;