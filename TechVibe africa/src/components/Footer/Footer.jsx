import React from 'react'
import './Footer.css'
import logo from '../../assets/logo2.png'

function Footer() {
  return (
      <section>
   <section className="footer-section min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10 py-16  text-gray-400 place-items-center">

      <div>
        <div className='flex items-center mb-10'>
        <img src={logo} alt="logo" className='w-[3rem]'/>
        <h1 className='font-bold text-2xl  text-white '>TechVibe Africa</h1>
        </div>
        <p>At TechVibe Africa, we turn your ideas into powerful digital experiences. From websites to apps, we build reliable, scalable, and secure solutions that help your business stand out in the modern tech world.</p>
        <div className='cursor-pointer'><br />
          <i className="fa-brands fa-facebook text-2xl"></i>
          <i className="fa-brands fa-square-instagram text-2xl"></i>
          <i className="fa-brands fa-square-github text-2xl"></i>
          <i className="fa-brands fa-linkedin text-2xl"></i>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-2xl mb-7 text-white border-l-4 border-green-500 pl-2'>Quick Links</h1>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Partners</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold text-2xl mb-7 text-white border-l-4 border-green-500 pl-2'>Our Solution</h1>
        <ul>
          <li>Web Development</li>
          <li>App Development</li>
          <li>Cloud solution</li>
          <li>AI machine learning</li>
          <li>Digital Transformation</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold text-2xl mb-7 text-white border-l-4 border-green-500 pl-2'>Get In Touch</h1>
        <p><i className="fa-solid fa-envelope text-green-500 text-2xl"></i> info@techvibeafrica.com</p><br />
        <p><i className="fa-solid fa-phone-volume text-green-500 text-2xl"></i> + 250 791 456 860</p><br />
        <p><i className="fa-solid fa-location-dot text-green-500 text-2xl"></i> Dubai, 123 Tech </p>
      </div>
      </section>
        <footer className='py-[1.3rem] text-center border-t-2 border-gray-400  text-gray-400 bg-black  md:text-base text-sm'>
          &copy;{new Date().getFullYear()}TechVibe Africa All reserved. powed by innovation
        </footer>
    </section>
  )
}

export default Footer