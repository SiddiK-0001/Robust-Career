import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { Authcontext } from "../provider/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
    const { user, signOutUser, loading,setLoading } = useContext(Authcontext);

    const navigate = useNavigate()
    // console.log(user)

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-white"></span>
            </div>)
    }



    const handleOut = () => {
        signOutUser()
        .then(()=>{
            setLoading(false)
        })

       navigate('/');
        

    }
    const links =
        <>
            <NavLink to="/">Home</NavLink>
           {
            user && 
            <>
             <NavLink to="/profile">My Profile</NavLink>
            <NavLink to="/about">About Us</NavLink>

            </>
           }
        </>
    return (
        <div className="text-white py-3 ">
            <ToastContainer position='top-center' />
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
                    {
                        user ?
                            <>
                                <div className="mr-2 flex gap-2 btn h-10 btn-sm rounded-3xl bg-black shadow-lg border border-yellow-600">
                                    <img className="rounded-full w-7 h-7" src={user?.photoURL
                                    } alt="" />
                                    <p className="text-white text-lg">{user?.displayName}</p>
                                </div>
                                {/* <a className=" mr-2">{user?.email}</a> */}
                                <button onClick={handleOut} className="btn bg-[#FFD700] text-lg border-none font-bold text-black">Sign out</button></>
                            :
                            <NavLink className="btn border-none bg-[#FFD700] text-lg font-bold text-black" to='/login'>Log in</NavLink>
                    }
                </div>
            </div>

            
        </div>
    );
};

export default Navbar;