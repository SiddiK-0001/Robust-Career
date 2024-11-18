import { sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useContext, useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Authcontext } from "../provider/Authprovider";
import { NavLink } from "react-router-dom";

const Register = () => {
    const [errorMessage, setError] = useState('')
    const [success, setSuccess] = useState('');
    const [eye, setEye] = useState(false);

    const { createUser } = useContext(Authcontext)

    const handleEye = () => {
        setEye(!eye)
    }

    const handleSignUp = e => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        const name = e.target.name.value;

        setError('');
        setSuccess('');

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
                }
                updateProfile(auth.currentUser, profile)

                // .then(()=>{
                //     console.log("Updated")
                // })
                // .catch((error)=>{
                //     console.log('Here is a error',error)
                // })

                setSuccess('Successfully signed up')
            })
            .catch(error => {
                // console.log(error.message)
                setError(' "Email already used" !! ');
            })


    }
    return (
        <div>


            
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
                    <div className=' min-h-screen flex items-center justify-center w-3/4 mx-auto'>

                        <div className="hero ">
                            <div className="hero-content flex-col lg:flex-row-reverse">

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
                                            <button onClick={handleEye} className="absolute right-3 top-14" type="button">
                                                {
                                                    eye ? <FaEye /> : <IoIosEyeOff />
                                                }
                                            </button>
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover font-bold text-md">Forgot password?</a>
                                            </label>
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
                                    </form>

                                    {
                                        errorMessage && <p className="text-center text-red-600">{errorMessage}</p>
                                    }

                                    {
                                        success && <p className="text-green-600 ">{success}</p>
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