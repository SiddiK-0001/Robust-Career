
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';
import Banner from '../component/Banner';

const AboutPage= () => {
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
                  "Empowering Careers, Enabling Futures"
                </>}
                subtitle=
                {<>
                    "At Robust Career, our mission is to guide individuals on their journey to professional success. With <span className="text-[#FFD700] text-xl">personalized career counseling</span>, expert insights, and innovative tools, we are committed to helping you make informed decisions, achieve your goals, and unlock your true potential. Together, let's shape a brighter tomorrow."
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

export default AboutPage;