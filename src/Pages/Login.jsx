import React, { useRef, useEffect, useReducer, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../usersRedux/authinticationSlice';
import './css.css'
import { useLocation } from "react-router-dom";

function Login() {

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [username, setUser] = useState("");
    const dispatch = useDispatch();
const location =useLocation();
    const handleFocus = useRef(null)


    const handleSubmit = (e) => {
        e.preventDefault();


        setError("");
        if (username.length <3) {
            setError("Invalid Username: Must At least 3 Charcters")
            return
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }
        dispatch(login(username))
        console.log("Username:", username);
        console.log("Password:", password);
    }
    useEffect(() => {
        handleFocus.current.focus()
    }, [])


    return (
        <>
            <div className="login box w-96 p-6 bg-white  rounded-lg shadow-md mt-20 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Username </label>
                        <input onChange={(e) => setUser(e.target.value)} ref={handleFocus} type="text" placeholder="Username" className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focuse:shadow-outline" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2">Password </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focuse:shadow-outline" />
                    </div>
                    <div className="flex items-center justify-between">
                        <input type="submit" value="Sign In" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                    </div>
                </form>
            </div>
            {error|| location.state?.message&& (
                <p className="st bg-red-600/40 w-fit text-red-500 mx-auto relative my-5 p-2 rounded-xl text-white font-bold text-sm mb-3">
                    {error||location.state.message}
                </p>
            )}

        </>
    )
}
export default Login;

/*
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">   Username</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>

 */