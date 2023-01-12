import React from 'react'
import SearchBox from './Searchbox'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-purple-600 text-3xl font-bold cursor-pointer'>RIOT STREAM SERVICE</h1>
        <div>
          {/* <SearchBox></SearchBox> */}
        </div>
        <div>
            <button className='text-white font-bold pr-4'>Sign In</button>
            <button className='bg-purple-600 font-bold px-3 py-2 rounded cursor-pointer text-black'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar
