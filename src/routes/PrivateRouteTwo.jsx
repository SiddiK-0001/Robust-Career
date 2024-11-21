import React, { useContext } from 'react';
import { Authcontext } from '../provider/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateRouteTwo = ({ children }) => {
    const { user,loading } = useContext(Authcontext)
    

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    if (user) {
        return children;
    }
    else{
        return (
            <Navigate to="/"></Navigate>
            
        )
    }
   
};

export default PrivateRouteTwo;