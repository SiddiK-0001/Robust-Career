
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';
import Banner from '../component/Banner';

const Home= () => {
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
                    className="relative flex flex-col "
                >               
               
               <div>
               <Navbar />
               <Banner
                title=
                {<>
                    Building Your Future with <span className="text-[#FFD700] text-6xl">Confidence</span>
                </>}
                subtitle=
                {<>
                    Unlock your full potential with <span className="text-[#FFD700]  text-lg">Robust Career</span>, the ultimate career counseling platform. Whether you're a student, a fresh graduate, or a professional exploring new horizons, we provide personalized guidance, expert advice, and powerful tools to help you navigate your career journey. Take the first step toward a brighter future today! <br/><br/>
                    <span className='text-2xl font-bold '>Please Login to unlock all routes and features</span>
                </>}>
                </Banner>
               </div>
                
              </div>

            <div className='flex-grow'>
            <Outlet></Outlet>
            </div>

            
            <Footer></Footer>
        




        </div>
    );
};

export default Home;