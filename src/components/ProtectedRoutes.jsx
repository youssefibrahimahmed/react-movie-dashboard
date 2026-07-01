import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({ children }) {
    const isLoggedIn = useSelector(
        state => state.loginData.isLoggedIn
    )
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }
    return children
}

export default ProtectedRoutes