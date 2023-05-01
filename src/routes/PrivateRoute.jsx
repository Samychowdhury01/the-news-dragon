import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <div className='d-flex justify-content-center align-items-center'>
             <Spinner animation="border" variant="primary" />
        </div>
    }
    if(user){
        return children
    }
    else{
        return <Navigate state={{from: location}} to="/login" replace></Navigate>;
    }
};

export default PrivateRoute;