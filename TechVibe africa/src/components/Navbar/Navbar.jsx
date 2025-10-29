import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
function Navbar() {
  return (
    <nav className=' flex items-center justify-around py-2  top-0 left-0 w-full z-10 shadow-md '>
      <div className='text-white font-bold text-sm md:text-3xl'>
        <img src={logo} alt="main logo"  
         className='w-[3.5rem]'/>
        {/* TechVibe Africaa */}
      </div>
      
        <ul className='hidden md:flex gap-6 cursor-pointer font-medium text-white'>
          <li className='nav-links' >Home</li>
          <li className='nav-links'>About</li>
          <li className='nav-links'>Services</li>
          <li className='nav-links'>Projects</li>
          <li className='nav-links'>Insights</li>
        </ul>
            
        <button className='bg-green-500 py-1 px-3 rounded-lg font-semibold cursor-pointer'>Hire us</button>
      
    </nav>
  )
}

export default Navbar