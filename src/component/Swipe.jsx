import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css'; 7
import 'swiper/css/pagination';

import './Swipe.css';
import { useLoaderData } from 'react-router-dom';
// import './Navbar.css'
const Swipe = ({data}) => {
    const details = useLoaderData()
    return (
        <div>
            <Swiper className=" mySwiper flex items-center justify-center w-5/6 mx-auto"
                // slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}

                breakpoints={{
                    
                    640: {
                      slidesPerView: 1, 
                    },
                    768: {
                      slidesPerView: 3, 
                    },
                    1024: {
                      slidesPerView: 4, 
                    },
                  }}

            >

                {
                    data.map((detail,idx) =>
                        <SwiperSlide 
                        key={idx} className='flex flex-col text-black h-10 '>
                            <p>{detail.subtitle}</p>
                            <p className='text-2xl font-extrabold'>{detail.title}</p>
                        </SwiperSlide>
                    )
                }


            </Swiper>
        </div>
    );
};

export default Swipe;