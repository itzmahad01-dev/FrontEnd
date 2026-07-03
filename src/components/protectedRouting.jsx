import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRouting = ({children}) => {
const status = localStorage.getItem("Status");
if(!status){
    return <Navigate to={"/login"} />
}
    return children
}

export default ProtectedRouting