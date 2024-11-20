import React, { useContext, useEffect, useRef } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';


const ForgetPass = () => {
    const emailRefoo = useRef();
    const navigate = useNavigate();

    const { loginEmail } = useContext(Authcontext);

    useEffect(() => {
        if (loginEmail && emailRefoo.current) {
            emailRefoo.current.value = loginEmail;
        }
    }, [loginEmail]);

    const handleForget = (e) => {
        e.preventDefault();
        
        const email = emailRefoo.current.value;
        if (!email) {
            toast.error('Please provide a valid email',{
                autoClose: 500
            });

            return;
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast.success('Password reset email sent,check your email',{
                        autoClose: 500
                    });
                    setTimeout(() => {
                        navigate('/login');
                    }, 1000);                    
                })

                .catch((error) => {
                  
                    toast.error("Something went wrong", {
                        autoClose: 2000,
                    });
                });
        }


    }
    return (
        <div>
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


                    <div className="hero flex items-center justify-center w-3/4 mx-auto   text-black">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold text-white">Want to reset Password?</h1>
                                <p className="mt-6 text-white font-normal">
                                 Click on the reset button to get a  "password reset email".
                                </p>
                                
                            </div>

                            <div className="card bg-[#FFD700] w-full max-w-sm shrink-0 shadow-2xl">
                                <form onSubmit={handleForget} className="card-body">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="text-lg font-bold ">Email</span>
                                        </label>
                                        <input type="email" ref={emailRefoo} name="email" placeholder="email" className="input input-bordered" required />
                                    </div>                        

                                    <div className="form-control mt-6" >

                                        <button type="submit" className="btn  bg-black text-yellow-300 border-none font-bold text-xl">Reset</button>

                                    </div>                          
     
                                </form>

                            </div>
                        </div>
                    </div>


                    <p className='text-6xl text-white text-center font-bold '> Don't want to Reset Password? Back to <NavLink to="/login" className='text-[#FFD700] underline underline-offset-4'>Login</NavLink></p>

                </div>


            </div>

        </div>
                    

               
         
    );
};

export default ForgetPass;