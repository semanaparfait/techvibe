import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.png'
function Navbar({variant}) {
  const [clickedli,setClickedli]= useState("home")
  return (
    // <nav className=' flex items-center justify-around py-2  top-0 left-0 w-full z-10 shadow-md '>
    <nav className={`${variant === 'about' ? 'absolute' : 'relative'} flex items-center justify-around py-2  top-0 left-0 w-full z-10 shadow-md border-none`}>
      <div className='text-white font-bold text-sm md:text-3xl'>
        <Link to="/">
        <img src={logo} alt="main logo"  
         className='w-[3.5rem]'/>
        </Link>
        {/* TechVibe Africaa */}
      </div>
      
    <ul className='hidden md:flex gap-6 cursor-pointer font-medium text-white'>
      <li className='nav-links'><Link to="/">Home</Link></li>
      <li className='nav-links'><Link to="/about">About</Link></li>
      <li className='nav-links'><Link to="/services">Services</Link></li>
      <li className='nav-links'><Link to="/projects">Projects</Link></li>
      <li className='nav-links'><Link to="/contact us">Contact us</Link></li>
    </ul>

            
        <button className='bg-green-500 py-1 px-3 rounded-lg font-semibold cursor-pointer'>Hire us</button>
      
    </nav>
  )
}

export default Navbar