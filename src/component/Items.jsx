import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Items = () => {
    const devices = useLoaderData()
    return (
        <div>
            <div className='flex items-center justify-center gap-3'>
                <div className='h-px flex-grow bg-black'>
                </div>
                <p className='text-center text-4xl my-5 font-bold bg-[#FFD700] px-4 text-black shadow-md'>Services We Provide</p>
                <div className='h-px flex-grow bg-black '>
                </div>
            </div>

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


           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-5 p-6   w-fit mx-auto">

           {devices.map((device) => (
    <div 
        key={device.id} 
        className="max-w-sm outline outline-offset-4 shadow-lg  bg-transparent border border-gray-200"
    >
        <img 
            src={device.image} 
            alt={device.serviceName} 
            className="w-full h-48 object-cover" 
        />
        <hr />
        <div className="p-6 pt-2">
            <h2 className="text-2xl font-bold text-white">{device.serviceName}</h2>
            <p className="text-sm text-white mt-2">
                <span className="font-semibold">Category:</span> <button className=' border border-white rounded-3xl px-4 text-white  bg-yellow-800 bg-opacity-5'>{device.category}</button>
            </p>
            <p className="text-sm text-white mt-1">
                <span className="font-semibold">Pricing:</span> {device.pricing}
            </p>
            <p className="text-sm text-white mt-1">
                <span className="font-semibold">Counselor:</span> {device.counselor}
            </p>
            <div className="mt-4">
                <Link to={`/details/${device.id}`}
                    className="bg-yellow-500 text-black font-bold tracking-wide text-lg bold py-2 px-4 rounded hover:bg-yellow-800 transition-all">
                    Learn More
                </Link>
            </div>
        </div>
    </div>
))}
            </div>


            </div>





</div>


                       

            

        
    );
};

export default Items;