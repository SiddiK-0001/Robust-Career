
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";




import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const Details = () => {
    const { id } = useParams()

    const devices = useLoaderData()

    const [data, setData] = useState({})

    useEffect(() => {
        const filterCategory = [...devices].find(device => device.id == id);
        setData(filterCategory);
    }, [devices, id])

    const { serviceName, additionalServices, description, rating, image, pricing, duration, counselor, category } = data || {};

    // "category": "Online",
    // "description": "Personalized career guidance to help you choose the right path.",
    // "pricing": "$50 per session",
    // "duration": "05-12-24 5-6pm",
    // "counselor": "Dr. Emily Carter",




    return (
        <div className="flex flex-col min-h-screen">
            <ToastContainer position="top-center" />

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

                <Navbar></Navbar>

                <Banner title="Product Details" subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"></Banner>

            </div>

            <div className="flex-grow">
                <div className="px-5 py-3 text-black rounded-3xl mx-auto w-1/2 -mt-16 bg-[#FFD700]  items-center flex flex-col md:flex-row gap-10 mb-36 shadow-lg outline outline-offset-8 outline-white">


                    <img className="md:h-full md:w-56 h-56 w-full  object-cover rounded-xl " src={image} alt="" />


                    <div className="space-y-2">
                        <p className="text-3xl font-bold">{serviceName} </p>
                        <p>Price : <span className="font-bold">${pricing}</span></p>

                        <p>Duration : <span className="font-bold">{duration}</span></p>

                        <div className="flex gap-10 items-center">
                            <p className="btn btn-xs rounded-2xl bg-green-100 border-green-500">{category}</p>
                            <p className="btn btn-xs rounded-2xl bg-green-100 border-green-500 font-bold">{counselor}</p>
                        </div>

                        <p>{description}</p>

                        <p className="font-bold text-xl">AdditionalServices:</p>
                        <ul >
                            {additionalServices && additionalServices.map((item, idx) => (
                                <li key={idx}><span>{idx + 1}. </span>{item}</li>
                            ))}
                        </ul>
                        <p className="font-bold">Rating: {rating}</p>

                        <div className="flex items-center">

                            {Array.from({ length: 5 }).map((_, index) => {
                                

                                if (index + 1 <= rating) {
                                   
                                    return <AiFillStar key={index} className="text-white w-6 h-6" />;
                                }
                                else if (index < rating && rating < index + 1) {
                                    
                                    return (
                                    
                                            <AiFillStar key={index} 
                                                className="text-white w-6 h-6"
                                                style={{ clipPath: "inset(0 50% 0 0)" }}
                                            />
                                           
                                        
                                    );
                                }
                                else {
                                    
                                    return <AiOutlineStar key={index} className="text-white w-6 h-6" />;
                                }
                            }
                            )
                            }
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>



        </div>
    );
};

export default Details;