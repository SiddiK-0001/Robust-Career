import {  updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useContext, useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Authcontext } from "../provider/Authprovider";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [errorMessage, setError] = useState('')
    const navigate = useNavigate();
    const [eye, setEye] = useState(false);

    const { createUser,signInWithGoogle } = useContext(Authcontext)

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

    const handleSignUp = e => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        const name = e.target.name.value;
        const photo =e.target.photo.value;
        

        setError('');
       

        if (!terms) {
            setError('Please accept our terms and conditions');
            return;
        }



        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password should contain atleast one lowercase, one uppercase and a minimum length of 6');
            return;
        }

        createUser(email, password)
            .then(result => {
                // console.log(result.user)                         

                const profile = {
                    displayName: name,
                    photoURL : photo,
                }
                updateProfile(auth.currentUser, profile)

                // .then(()=>{
                //     console.log("Updated")
                // })
                // .catch((error)=>{
                //     console.log('Here is a error',error)
                // })

                toast.success('Successfully Signed up', {
                    autoClose: 500 
                });                
        
                e.target.reset();

                setTimeout(() => {
                    navigate('/');
                }, 1000);
            })
            .catch(error => {
                // console.log(error.message)
                setError(' "Email already used" !! ');
            })


    }
    return (
        <div>

<ToastContainer position="top-center"/>
            
                <div
                    style={{
                        backgroundImage: "url('https://i.ibb.co/Ch60pPY/vecteezy-top-view-of-a-workspace-on-a-blue-desk-1309407.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        // height: "obeject-fit",
                        width: "100%",
                        position: "relative",
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        backgroundBlendMode: "overlay", 
                    }}
                >
                    <div className=' min-h-screen flex items-center justify-center md:w-3/4 w-11/12 mx-auto'>

                        <div className="hero ">
                            <div className="hero-content flex-col lg:flex-row-reverse text-black">

                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold text-white">Register now!</h1>
                                    <p className="py-6 text-white">
                                        For a <span className='text-[#FFD700] text-lg'>BETTER</span> user experience, please register and create your account. By signing up, you'll unlock personalized recommendations, access exclusive features, and save your progress for future visits. Registration is quick and easy, ensuring a seamless and tailored experience every time you use our platform.
                                    </p>
                                    <p className='text-white text-3xl'>Already have an Account? Please <NavLink to="/login" className='text-[#FFD700] text-4xl underline underline-offset-4'>Login</NavLink></p>
                                </div>

                                <div className="card bg-[#FFD700] w-full max-w-sm shrink-0 shadow-2xl">
                                    <form className="card-body" onSubmit={handleSignUp}>


                                        <div className="form-control">
                                            <label className="label">
                                                <span className="font-bold text-lg">Name</span>
                                            </label>
                                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="font-bold text-lg">Photo</span>
                                            </label>
                                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                                        </div>

                                        {/* photo url er khetre type hbe text  */}

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="font-bold text-lg">Email</span>
                                            </label>
                                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                        </div>





                                        <div className="form-control relative">
                                            <label className="label">
                                                <span className="font-bold text-lg">Password</span>
                                            </label>
                                            <input type={eye ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />

                                            {/* nicher line er last e type button ta na dile auto reload khay page after clicking the eye icon  */}
                                            <button onClick={handleEye} className="absolute right-3 top-16 " type="button">
                                                {
                                                    eye ? <FaEye /> : <IoIosEyeOff />
                                                }
                                            </button>
                                            
                                        </div>
                                        <div className="form-control">
                                            <label className="label gap-2 cursor-pointer">
                                                <input type="checkbox" name="terms" className="checkbox border border-black" />
                                                <span className="font-bold text-lg">Accept our terms and conditions</span>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn bg-black border-none text-yellow-300 font-bold text-xl">Register</button>
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
                                        errorMessage && <p className="text-center text-red-600">{errorMessage}</p>
                                    }

                                   


                                </div>
                            
                        </div>

                        </div>

                    </div>

                </div>


        </div>
    );
};


export default Register;