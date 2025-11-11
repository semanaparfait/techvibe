import React, { useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo2.png'

function Navbar({ variant }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact us', path: '/contact us' },
  ]

  return (
    <nav
      className={`${variant === 'about' ? 'absolute' : 'sticky'} top-0 left-0 w-full z-20    flex items-center justify-between px-6 py-3`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg md:text-2xl">
        <img src={logo} alt="TechVibe logo" className="w-[3.5rem]" />
        {/* <span>TechVibe Africa</span> */}
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white font-medium">
        {links.map((link) => (
          <li
            key={link.name}
            className={`nav-links ${
              location.pathname === link.path ? 'text-green-400 border-b-2 border-green-400' : 'hover:text-green-400'
            }`}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Hire Us Button */}
      <button className=" bg-green-500 py-2 px-5 rounded-lg font-semibold hover:bg-green-400 transition-all">
        Hire us
      </button>

      {/* Mobile Menu Button */}
      <i
        className="fa-solid fa-bars text-white text-2xl md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-0 h-screen w-1/2 bg-black text-white flex flex-col items-center py-5 gap-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-green-500 py-2 px-5 rounded-lg font-semibold hidden">
            Hire us
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
