import React, {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Hero.css'
import experience from '../../assets/rates/expe.jpg'
import projects from '../../assets/rates/download (3).jpg'
import happy from '../../assets/rates/download (5).jpg'
import skilled from '../../assets/rates/download (4).jpg'
import alu from '../../assets/investors/alu1.png'
import rwandaair from '../../assets/investors/rwandaair.png'
import rca from '../../assets/investors/rca1.jpg'
import movieland from '../../assets/investors/movieland.png'
import Services from '../Services/Services'

function Hero() {

  



  return (
    <section>
        <div className='hero-section h-screen'>
        <Navbar />
        <div className='hero-content flex flex-col gap-2  h-full'>
          <div className="absolute -top-40 -right-20 w-96 h-96 
            bg-green-600 
            opacity-10
            rounded-full 
            mix-blend-screen 
            filter blur-3xl 
            animate-pulse" 
     aria-hidden="true">
</div>
          <div className=' '>
      <div className="pt-[5rem] text-center space-y-6 ">
      <h1 className="text-2xl md:text-4xl font-extrabold text-white">
        Turning <span className="text-green-400">Ideas</span> Into Digital Reality
      </h1>
      <h2 className="text-lg  md:text-2xl font-bold text-white ">
        What we do best
        <span className="all-services bg-green-400 text-black text-sm md:text-base py-1 px-3 rounded-lg "></span>
      </h2>


        <p className="text-xl md:text-2xl text-white px-4 max-w-3xl mx-auto hidden">
          Empowering Your Digital Future with Innovative Tech Solutions
        </p>
      </div>
<br /><br />
        <div className='flex items-center justify-center gap-4 cursor-pointer '>
          <button className='text-black font-semibold bg-green-500 py-2 px-3 text-xs md:py-2.5 md:px-5 md:text-base rounded-3xl cursor-pointer'>Start Your project <i className="fa-solid fa-arrow-right"></i></button>
          <button className=" cursor-pointer  text-white font-semibold py-2 px-3 text-xs md:py-2.5 md:px-6 md:text-base border border-green-400 rounded-3xl hover:bg-green-500 hover:text-black hover:shadow-[0_0_15px_#22c55e] transition-all duration-300 ease-in-out">
            <i className="fa-solid fa-code"></i> View Our Work
          </button>

        </div><br />

          </div><br />

        {/* -------------------some services section----------------- */}
        <div className='flex gap-3 text-center ml-3'>
          <div>
            <i className="fa-solid fa-code text-green-300 text-lg md:text-2xl"></i>
            <p className='text-gray-300 font-semibold text-sm md:text-base'>Web/App Dev</p>
          </div>
          <div>
            <i className="fa-solid fa-cloud text-green-300 text-lg md:text-2xl"></i>
            <p className='text-gray-300 font-semibold text-sm md:text-base'>Cloud Solutions</p>

          </div>
          <div>
            <i className="fa-solid fa-shield-halved text-green-300 text-lg md:text-2xl"></i>
            <p className='text-gray-300 font-semibold text-sm md:text-base'>Cyber Security</p>
          </div>
          <div>
            <i className="fa-solid fa-robot text-green-300 text-lg md:text-2xl"></i>
            <p className='text-gray-300 font-semibold text-sm md:text-base'>AI Solutions</p>
          </div>
        </div><br />
        {/* ------------------trusted by section----------------- */}
        <div>
        <div className='flex items-center justify-center flex-col gap-3'>

          <p className='text-gray-300 mt-3 font-semibold text-base ml-1 md:text-[18px]'>Rated 5/5 by our clients for quality service delivery</p>
        </div><br /><br />

        <section className="relative z-10 px-6 pb-16">
          {/* 1. Add overflow-hidden here */}
          <div className="max-w-7xl mx-auto overflow-hidden">
            {/* 2. Add 'animate-scroll' and remove 'justify-center' */}
            <div className="flex items-center justify-start gap-12 md:gap-16 animate-scroll cursor-pointer">
              
              {/* 3. Add 'flex-shrink-0' and 'whitespace-nowrap' to ALL items */}
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">⚡</span>
                <span>CodeAfrique</span>
              </div>
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">✦</span>
                <span>NaijaTech</span>
              </div>
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">⚡</span>
                <span>SecureConnect</span>
              </div>
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">⟲</span>
                <span>DataFlow</span>
              </div>
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">☁</span>
                <span>CloudBurst</span>
              </div>
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">📱</span>
                <span>AppNaWeb</span>
              </div>

              {/* --- DUPLICATED SET --- */}
              {/* (Remember to add the classes to these too!) */}
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">⚡</span>
                <span>CodeAfrique</span>
              </div>
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">✦</span>
                <span>NaijaTech</span>
              </div>
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">⚡</span>
                <span>SecureConnect</span>
              </div>
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">⟲</span>
                <span>DataFlow</span>
              </div>
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">☁</span>
                <span>CloudBurst</span>
              </div>
              <div className="text-white/80 text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">📱</span>
                <span>AppNaWeb</span>
              </div>

            </div>
          </div>
        </section>
        </div>


        </div>
        {/* --------------------sponsers------- */}
        </div>
        <div>
          <Services />
        </div>

        <Footer />

    </section>
  )
}

export default Hero