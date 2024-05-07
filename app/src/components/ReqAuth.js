import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const ReqAuth = ({children}) => {
    console.log(children)
    const isAuth = useSelector((state)=> state.Auth.isAuth);
    const location = useLocation();
    if(!isAuth){
        return <Navigate to="/login" replace state={{data:location.pathname}}/>
    } 
    return children
}

export default ReqAuth
