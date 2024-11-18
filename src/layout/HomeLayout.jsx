
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const HomeLayout= () => {
    return (
        <div>
            <div style={{
                backgroundImage: "url('https://i.ibb.co/Ch60pPY/vecteezy-top-view-of-a-workspace-on-a-blue-desk-1309407.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "60vh",
                width: "100%",
                position: "relative",

            }}>
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    zIndex: 1,
                }}>
                <Navbar ></Navbar>
                </div>
            </div>

            <Outlet></Outlet>

            
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;