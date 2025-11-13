import React from 'react'
import './Footer.css'
import logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom'
import me from '../../assets/team/ngwino.jpg'

function Footer() {
  return (
      <section className='footer-section  '>
      <div className="relative w-full h-full md:h-screen flex items-center justify-center">
        {/* this is an image background */}
        <img
          decoding="auto"
          width="2400"
          height="2400"
          sizes="100vw"
          srcSet="https://framerusercontent.com/images/r8h54waxecW0VDeJNiUZbs6f78.jpeg?scale-down-to=512 512w,
                  https://framerusercontent.com/images/r8h54waxecW0VDeJNiUZbs6f78.jpeg?scale-down-to=1024 1024w,
                  https://framerusercontent.com/images/r8h54waxecW0VDeJNiUZbs6f78.jpeg?scale-down-to=2048 2048w,
                  https://framerusercontent.com/images/r8h54waxecW0VDeJNiUZbs6f78.jpeg 2400w"
          src="https://framerusercontent.com/images/r8h54waxecW0VDeJNiUZbs6f78.jpeg"
          alt="Extreme close-up black and white photograph of a human eye"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            objectPosition: "center",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80 z-0"></div> 

        {/* all details section */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full md:h-screen py-6">
          <h1
            className="text-[32px] md:text-[112px] font-semibold leading-[35px] md:leading-[108px]"
            style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif' }}
          >
            Let's Talk about <br /> your project
          </h1>
          <br />
          <p
            className="font-medium text-base md:text-lg leading-[22px] md:leading-[25px] text-[rgba(255,255,255,0.6)]"
            style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif' }}
          >
            Please make sure to add some project details so we can analyze and <br />
            get back to you with a quote. Reach out anytime — we'll provide a quote <br />
            according to the details & if everything aligns, we can move forward.
          </p>
          <br />
          <div className="flex gap-3 flex-wrap items-center justify-center">
            <button className="bg-green-900 py-4 px-7 rounded-3xl md:text-[20px] font-medium hover:bg-green-800 transition">
              <i className="fa-solid fa-arrow-right"></i> Book a Call
            </button>
            {/* <button > */}
            <Link to='contact us' className="bg-white text-black px-7 py-4 rounded-3xl md:text-[20px] font-medium hover:bg-gray-200 transition">
              <i className="fa-solid fa-arrow-right"></i> Contact us
            </Link>
            {/* </button> */}
          </div>
          <br />
          <br />
          <div className="flex items-center gap-5">
            <img src={me} alt="the owner semana image" className="w-16 h-16 rounded-full" />
            <div>
              <h1 className="font-medium text-lg leading-[25px]">SEMANA SHEMA Parfait</h1>
              <h2 className="leading-[21px] font-medium text-[rgba(255,255,255,0.6)]">
                Founder & Creative Leader
              </h2>
            </div>
          </div>
        </section>
      </div>
      <section className=' 'style={{alignItems:"start"}}>

   <section className="p-3  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10 pt-16  text-gray-400 place-items-center ">

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
        <h1 className='font-bold text-2xl mb-7 text-white border-l-4 border-green-500 pl-2 cursor-pointer'>Quick Links</h1>
        <ul className='cursor-pointer'>
      <li ><Link to="/">Home</Link></li>
      <li ><Link to="/about">About</Link></li>
      <li ><Link to="/services">Services</Link></li>
      <li ><Link to="/projects">Projects</Link></li>
      <li ><Link to="/contact us">Contact us</Link></li>
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
      <h1 className='footer-name text-center text-[40px] md:text-[100px] text-white font-black  '>Techvibe Africa</h1>
        <footer className='py-[1.3rem] text-center border-t-2 border-gray-600  text-gray-400 bg-black  md:text-base text-sm'>
          &copy;{new Date().getFullYear()}TechVibe Africa All reserved. powed by innovation
        </footer>
        </section>
      <div className="bg-[#32f08c] text-black h-[20%] md:h-[50%] text-center font-black text-[8
      rem] md:text-[13rem]  sticky bottom-0" >
        <h1>TECH VIBE</h1>
      </div>




    </section>
  )
}

export default Footer