import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../usersRedux/authinticationSlice';
function Nav() {
    const username = useSelector(state => state.loginData.username)
    const isLoggedIn = useSelector(state => state.loginData.isLoggedIn)
    const dispatch = useDispatch()
    return (
        <div className="items-center z-10 bg-gray-800 mb-20 flex px-4 text-white py-4 fixed top-0 w-full">
            <div className="container mx-auto px-4">
                <NavLink to="/login" className={({ isActive }) => isActive ? "text-xl font-bold mr-4 pb-[12px] active" : "text-xl font-bold mr-4 pb-[12px]"}> Login </NavLink>
                <NavLink to="/films" className={({ isActive }) => isActive ? "text-xl font-bold mr-4 pb-[12px] active" : "text-xl font-bold mr-4 pb-[12px]"}> Films </NavLink>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-xl font-bold mr-4 pb-[12px] active" : "text-xl font-bold mr-4 pb-[12px]"}> Dashboard </NavLink>
                <NavLink to="/trending-movies" className={({ isActive }) => isActive ? "text-xl font-bold mr-4 pb-[12px] active" : "text-xl font-bold mr-4 pb-[12px]"}> Trending Movies </NavLink>
            </div>
            <div className='relative  '>

                {
                    isLoggedIn && (
                        <>
                            <div className="cont flex items-center ">
                                <h2 className='w-fit text-xl font-bold pr-5'>   {username}</h2>
                                <button onClick={() => dispatch(logout())} className='bg-red-600 py-1 px-2 text-2xl font-semibold rounded hover:bg-red-800 transition duration-300 h-fit items-center'>Logout</button>
                            </div>
                        </>
                    )}
            </div>
        </div>
    )
}

export default Nav