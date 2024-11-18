import { createBrowserRouter } from "react-router-dom";

import Error from "../Error/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Profile from "../pages/Profile";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/about",
                element:<About></About>,
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            },
        ],
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
        path: "*", 
        element: <Error></Error>,
      },
])

export default Router;