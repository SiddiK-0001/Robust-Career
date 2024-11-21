

import React, { useContext } from 'react';
import { Authcontext } from '../provider/Authprovider';


import { auth } from "../firebase";
import { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useNavigate } from 'react-router-dom';


const Login = () => {

    const [errorMessage, setError] = useState('')
    const [eye, setEye] = useState(false)
    // const emailRefoo = useRef();
    const navigate = useNavigate();

    const { loginUser,signInWithGoogle,setLoginEmail } = useContext(Authcontext)

    const handleEye = () => {
        setEye(!eye)
    }

    const handleGoogle =()=>{
        return signInWithGoogle()
        .then(result => {
            // console.log(result.user)

            toast.success('Successfully logged in', {
                autoClose: 500
            });

           

            setTimeout(() => {
                navigate('/');
            }, 1000);

        })
        .catch(error => {
            setError(error.message)
        })

    }

    const handlelogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        // console.log(email,password)


        setError('');

        if (!terms) {
            setError('Please accept our terms and conditions')
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password should contain atleast one lowercase, one uppercase and a minimum length of 6');
            return;
        }


        loginUser(email, password)
            .then(result => {
                // console.log(result.user)

                toast.success('Successfully logged in', {
                    autoClose: 500
                });

                e.target.reset();

                setTimeout(() => {
                    navigate('/');
                }, 1000);

            })
            .catch(error => {
                setError(error.message)
            })


    }

    const handlePass=()=>{
        const email = document.querySelector('input[name="email"]').value;
        setLoginEmail(email);

        
        

        setLoginEmail(email);
        navigate("/forget");
    }



    return (

        <div >
            <ToastContainer position='top-center' />

            <div
                style={{
                    backgroundImage: "url('https://i.ibb.co/Ch60pPY/vecteezy-top-view-of-a-workspace-on-a-blue-desk-1309407.jpg')",
                    backgroundSize: "cover",

                    backgroundPosition: "center",
                    minHeight: "100%",
                    width: "100%",
                    position: "relative",
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    backgroundBlendMode: "overlay",
                }}
            >
                <div className='min-h-screen flex   flex-col items-center justify-center' >


                    <div className="hero flex items-center justify-center md:w-3/4 w-11/12 mx-auto   text-black">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold text-white">Login now!</h1>
                                <p className="mt-6 text-white font-normal">
                                    For a <span className='text-[#FFD700] text-lg'>BETTER</span> user experience, please log in to your account. Logging in allows us to provide you with personalized recommendations, save your progress, and give you access to exclusive features tailored just for you.
                                </p>
                                <p className='text-white text-3xl'>Don't have an Account? Please <NavLink to="/register" className='text-[#FFD700] text-4xl underline underline-offset-4'>Register</NavLink></p>
                            </div>

                            <div className="card bg-[#FFD700] w-full max-w-sm shrink-0 shadow-2xl">
                                <form onSubmit={handlelogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="text-lg font-bold ">Email</span>
                                        </label>
                                        <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
                                    </div>


                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="text-lg font-bold ">Password</span>
                                        </label>
                                        <input type={eye ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />

                                        <button onClick={handleEye} className="absolute right-3 top-16" type="button">
                                            {
                                                eye ? <FaEye /> : <IoIosEyeOff />
                                            }
                                        </button>

                                     


                                        <button type='button' onClick={handlePass} className="label">
                                            <span className="label-text-alt  link link-hover text-black font-bold ">Forgot password?</span>
                                        </button >
                                        
                                    </div>


                                    <div className="form-control">
                                        <label className="label gap-2 cursor-pointer">
                                            <input type="checkbox" name="terms" className="checkbox border border-black  " />
                                            <span className="text-black text-lg font-bold ">Accept our terms and conditions</span>
                                        </label>
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn  bg-black text-yellow-300 border-none font-bold text-xl">Login</button>
                                    </div>

                                    <div className="flex items-center justify-center my-4">
                                        <div className="h-px bg-black flex-grow"></div>
                                        <span className="px-3 text-xl ">Or</span>
                                        <div className="h-px bg-black flex-grow"></div>
                                    </div>


                                    <button onClick={handleGoogle}>Log in With <span className='text-xl text-red-800 underline hover:text-red-950
                                    '>GOOGLE</span></button>


                                </form>
                                {
                                    errorMessage && <p className="text-red-700 font-bold text-center">{errorMessage}</p>
                                }

                            </div>
                        </div>
                    </div>

                    <p className='md:text-6xl text-2xl text-white text-center font-bold '> Don't want to Login? Back to <NavLink to="/" className='text-[#FFD700] underline underline-offset-4'>Home</NavLink></p>


                </div>


            </div>

        </div>




    );
};

export default Login;