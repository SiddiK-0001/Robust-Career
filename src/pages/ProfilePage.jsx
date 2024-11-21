
import Navbar from '../component/Navbar';

import Footer from '../component/Footer';
import Banner from '../component/Banner';

import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useContext, useState } from 'react';
import { Authcontext } from '../provider/Authprovider';

const ProfilePage = () => {

    const { user} = useContext(Authcontext)
    const [currentUser, setCurrentUser] = useState(user);
    const handleUser=(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo =e.target.photo.value;
        
        const profile = {
            displayName: name,
            photoURL : photo,
        }
        updateProfile(auth.currentUser, profile)
        setCurrentUser({ ...currentUser, displayName: name, photoURL: photo });

        e.target.reset();
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <div
                style={{
                    backgroundImage: "url('https://i.ibb.co/Ch60pPY/vecteezy-top-view-of-a-workspace-on-a-blue-desk-1309407.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "50vh",
                    width: "100%",

                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    backgroundBlendMode: "overlay",
                }}
                className=" flex flex-col "
            >

                <div>
                    <Navbar />
                    <Banner
                        title=
                        {<>
                            Profile <span className="text-[#FFD700] md:text-6xl">Info</span>
                        </>}
                        subtitle=
                        {<>
                            "In this section, you can view the information you have previously registered, such as your personal details, contact information. Additionally, you have the ability to make updates to this information. Whether you need to correct any details, add new information, or change your settings, this section allows you to modify your account details to ensure they are accurate and up-to-date."
                        </>}>
                    </Banner>
                </div>

            </div>

            <div
                style={{
                    backgroundImage: "url('https://i.ibb.co/Ch60pPY/vecteezy-top-view-of-a-workspace-on-a-blue-desk-1309407.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "50vh",
                    width: "100%",

                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    backgroundBlendMode: "overlay",
                }}
                className=" flex flex-col mt-5"
            >
            <div className='flex-grow md:w-3/4 w-11/12 mx-auto my-8'>



                <div className='flex items-start gap-2 shadow-md border border-yellow-300 py-3 outline outline-offset-8 outline-black bg-[#ffd90058]'>
                    <div className='w-1/3'>
                    {currentUser?.photoURL && <img className='rounded-full w-full shadow-lg border border-black object-cover' src={currentUser.photoURL} alt="" />}
                    </div>

                    <div className='text-left md:text-4xl text-2xl font-bold text-black'>
                        <p>Name: <span className=' md:text-3xl  font-normal'>{ currentUser?.displayName}</span></p>
                        <p>Email: <span className=' md:text-3xl  font-normal'>{ currentUser?.email }</span></p>

                        {/* break all onk important when the items are overflowing from the parent div in small devices.jmn eikhane url div er baire chole jaitesilo. */}

                        <p>PhotoUrl: <span className=' md:text-2xl text-lg break-all font-normal'>{ currentUser?.photoURL}</span></p>
                    </div>
                </div>


                <div className="card bg-[#ffd900c5] md:w-1/2 w-11/12 shrink-0 shadow-2xl mt-9 mx-auto text-black outline outline-offset-8">
                                <form onSubmit={handleUser}  className="card-body">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="text-lg font-bold ">Name</span>
                                        </label>
                                        <input type="text" defaultValue={currentUser?.displayName}   name="name" 
                                    
                                        placeholder="name" className="input input-bordered"  />

                                        <label className="label">
                                            <span className="text-lg font-bold ">Photo URL</span>
                                        </label>
                                        <input type="text" defaultValue={currentUser?.photoURL}   name="photo"
                                        
                                         placeholder="photoUrl" className="input input-bordered"  />
                                    </div> 


                                    <div className="form-control mt-6" >
                                        <button type="submit" className="btn  bg-black text-yellow-300 border-none font-bold text-xl">Reset</button>

                                    </div>                          
     
                                </form>

                            </div>

            </div>


            </div>


            <Footer></Footer>





        </div>
    );
};

export default ProfilePage;