

import React, { useContext } from 'react';
import { Authcontext } from '../provider/Authprovider';

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [success, setSuccess] = useState('')
    const [errorMessage, setError] = useState('')
    const [eye, setEye] = useState(false)
    const emailRefoo = useRef();

    const { loginUser } = useContext(Authcontext)

    const handleEye = () => {
        setEye(!eye)
    }

    const handlelogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        // console.log(email,password)

        setSuccess('');
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

                setSuccess('Successfully logged in ')
            })
            .catch(error => {
                setError(error.message)
            })


    }

    const handleForget = () => {
        // console.log(emailRefoo.current.value)
        const email = emailRefoo.current.value;
        if (!email) {
            toast.error('Please provide a valid email')
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast.success('Password reset email sent,check your email')
                })
        }


    }


    return (

        <div >
            <ToastContainer />

            <div
                    style={{
                        backgroundImage: "url('https://i.ibb.co/Ch60pPY/vecteezy-top-view-of-a-workspace-on-a-blue-desk-1309407.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100vh",
                        width: "100%",
                        position: "relative",
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        backgroundBlendMode: "overlay", 
                    }}
                >
                    <div  className=' min-h-screen flex items-center justify-center w-3/4 mx-auto'>

                    <div className="hero font-bold text-black">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold text-white">Login now!</h1>
                                <p className="py-6 text-white">
                                For a <span className='text-[#FFD700] text-lg'>BETTER</span> user experience, please log in to your account. Logging in allows us to provide you with personalized recommendations, save your progress, and give you access to exclusive features tailored just for you.
                                </p>
                                <p className='text-white text-3xl'>Don't have an Account? Please <NavLink to="/register" className='text-[#FFD700] text-4xl underline underline-offset-4'>Register</NavLink></p>
                            </div>

                            <div className="card bg-[#FFD700] w-full max-w-sm shrink-0 shadow-2xl">
                                <form onSubmit={handlelogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="text-lg">Email</span>
                                        </label>
                                        <input type="email" ref={emailRefoo} name="email" placeholder="email" className="input input-bordered" required />
                                    </div>


                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="text-lg">Password</span>
                                        </label>
                                        <input type={eye ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />

                                        <button onClick={handleEye} className="absolute right-3 top-14" type="button">
                                            {
                                                eye ? <FaEye /> : <IoIosEyeOff />
                                            }
                                        </button>


                                        <label onClick={handleForget} className="label">
                                            <a href="#" className="label-text-alt  link link-hover text-black">Forgot password?</a>
                                        </label>
                                    </div>


                                    <div className="form-control">
                                        <label className="label gap-2 cursor-pointer">
                                            <input type="checkbox" name="terms" className="checkbox border border-black" />
                                            <span className="text-black text-lg">Accept our terms and conditions</span>
                                        </label>
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn  bg-black text-yellow-300 border-none font-bold text-xl">Login</button>
                                    </div>
                                </form>
                                {
                                    errorMessage && <p className="text-red-600">{errorMessage}</p>
                                }
                                {
                                    success && <p className="text-green-600">{success}</p>
                                }
                            </div>
                        </div>
                    </div>

                    </div>
                
            </div>

        </div>




    );
};

export default Login;