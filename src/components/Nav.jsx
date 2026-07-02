import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../usersRedux/authinticationSlice';
function Nav() {
    const username = useSelector(state => state.loginData.username)
    const isLoggedIn = useSelector(state => state.loginData.isLoggedIn)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className="items-center z-10 bg-gray-800 mb-20 flex px-4 text-white justify-between pt-4 fixed top-0 w-full">

            {/* Logo */}
            {
                isLoggedIn && (
                    <>
                        <div className="cont flex items-center ">
                            <h2 className='w-fit text-xl font-bold pb-3 pr-5'>   {username}</h2>
                        </div>
                    </>
                )}


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center  ml-10 gap-4 ">
                <NavLink to="/login" className={({ isActive }) => isActive ? "text-xl font-bold mr-4 pb-3 active" : "text-xl font-bold pb-3 mr-4 "}> Login </NavLink>
                <NavLink to="/films" className={({ isActive }) => isActive ? "text-xl font-bold mr-4  pb-3 active" : "text-xl font-bold mr-4 pb-3 "}> Films </NavLink>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-xl font-bold mr-4 pb-3  active" : "text-xl font-bold mr-4 pb-3"}> Dashboard </NavLink>
                <NavLink to="/trending-movies" className={({ isActive }) => isActive ? "text-xl font-bold mr-4 pb-3 active" : "text-xl font-bold mr-4 pb-3 "}> Trending Movies </NavLink>
            </div>


         

            <div className='relative '>
                <div className="cont flex items-center ">
                    <button disabled={!isLoggedIn} onClick={() => dispatch(logout())} className='mb-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-600 bg-red-600 py-1 px-2  text-xl font-semibold rounded hover:bg-red-800 transition duration-300 h-fit items-center'>Logout</button>

                </div>
            </div>


               {/* Mobile Navigation */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl ml-auto text-white focus:outline-none">
                ☰
            </button>



            {/* mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 z-10">
                    <NavLink to="/login" className={({ isActive }) => isActive ? "block px-4 py-2 text-white font-bold active" : "block px-4 py-2 text-white font-bold"}> Login </NavLink>
                    <NavLink to="/films" className={({ isActive }) => isActive ? "block px-4 py-2 text-white font-bold active" : "block px-4 py-2 text-white font-bold"}> Films </NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "block px-4 py-2 text-white font-bold active" : "block px-4 py-2 text-white font-bold"}> Dashboard </NavLink>
                    <NavLink to="/trending-movies" className={({ isActive }) => isActive ? "block px-4 py-2 text-white font-bold active" : "block px-4 py-2 text-white font-bold"}> Trending Movies </NavLink>
                </div>
            )}

        </div>
    )
}

export default Nav
