import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to="/">
                <h1 className='text-purple-600 text-3xl font-bold cursor-pointer'>RIOT STREAMING SERVICE</h1>
            </Link>
            <div>
                {/* <SearchBox></SearchBox> */}
            </div>
            <div><Link to="/auth/login">
                <button className='text-white font-bold pr-4'>Sign In</button>
            </Link>
                <Link to="/register">
                    <button className='bg-purple-600 font-bold px-3 py-2 rounded cursor-pointer text-black'>Sign Up
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Navbar
