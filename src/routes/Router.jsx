import { createBrowserRouter } from "react-router-dom";

import Error from "../Error/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";


import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/ProfilePage";
import ForgetPass from "../pages/ForgetPass";
import Items from "../component/Items";

const Router = createBrowserRouter([
   
            {
                path:"/",
                element:<Home></Home>,
                children:[
                    {
                        path:"/",
                        element:<Items></Items>,
                        loader: ()=> fetch('../fake.json')
                    }
                ]
            },
            {
                path:"/about",
                element:<AboutPage></AboutPage>,
                children:[
                    {
                        path:"/about",
                        element:<About></About>
                    }
                ]
            },
            {
                path:"/profile",
                element:<ProfilePage></ProfilePage>
            },
     
    
    {
        path:"/register",
        element:<Register></Register>,
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/forget",
        element:<ForgetPass></ForgetPass>
    },


    {
        path: "*", 
        element: <Error></Error>,
      },
])

export default Router;