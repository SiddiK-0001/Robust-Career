import { createBrowserRouter } from "react-router-dom";

import Error from "../Error/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";


import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/ProfilePage";
import ForgetPass from "../pages/ForgetPass";

import Details from "../pages/Details";
import PrivateRoute from "./PrivateRoute";

import PrivateRouteTwo from "./PrivateRouteTwo";

const Router = createBrowserRouter([

    {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
            const swipeResponse = await fetch('../fakeTwo.json');
            const swipeData = await swipeResponse.json();
      
            const itemsResponse = await fetch('../fake.json');
            const itemsData = await itemsResponse.json();
      
            return { swipeData, itemsData };
          },
    },
    {
        path: "/about",
        element: <PrivateRouteTwo><AboutPage></AboutPage></PrivateRouteTwo>,
        children: [
            {
                path: "/about",
                element: <About></About>
            }
        ]
    },
    {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('../fake.json'),
      },
    {
        path: "/profile",
        element: <PrivateRouteTwo>
            <ProfilePage></ProfilePage>
            </PrivateRouteTwo>
    },


    {
        path: "/register",
        element: <Register></Register>,
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/forget",
        element: <ForgetPass></ForgetPass>
    },


    {
        path: "*",
        element: <Error></Error>,
    },
])

export default Router;