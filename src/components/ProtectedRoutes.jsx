import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,useLocation } from 'react-router-dom'

function ProtectedRoutes({ children }) {
    const isLoggedIn = useSelector(
        state => state.loginData.isLoggedIn
    )
    const location =useLocation();
    if (!isLoggedIn) {

        return(
             <Navigate to="/login" replace 
              state={{ message: "Please login first to access this page." }}
     />
    
            )
    }
    return children
}

export default ProtectedRoutes