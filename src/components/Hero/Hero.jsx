import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
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
import allprojects from '../../pages/Data/Projects';
import me from '../../../src/assets/team/ngwino.jpg'

function Hero() {
const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is TechVibe Africa?",
      answer:
        "TechVibe Africa is a digital innovation hub that focuses on software development, UI/UX design, and empowering young African tech talents to create impactful solutions for the continent.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We specialize in web and mobile app development, UI/UX design, branding, and creative technology solutions tailored to businesses and startups in Africa.",
    },
    {
      question: "How can I collaborate with TechVibe Africa?",
      answer:
        "You can contact us through our website or social media platforms. We welcome partnerships, client projects, and community collaborations focused on technology and innovation.",
    },
    {
      question: "Do you offer mentorship or training?",
      answer:
        "Yes! We provide mentorship sessions and workshops to help young developers and designers enhance their skills and prepare for the global tech industry.",
    },
    {
      question: "Where is TechVibe Africa based?",
      answer:
        "TechVibe Africa is proudly based in Rwanda, operating both locally and remotely across Africa to support innovation and digital transformation.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
        <div className='hero-section h-screen w-full  '>
          
        <Navbar />
        <div className='hero-content flex flex-col items-center justify-center gap-6   h-screen md:pt-0 pb-28'>
          <div className="absolute -top-40 -right-20 w-96 h-96 
            bg-green-800 
            opacity-10
            rounded-full 
            mix-blend-screen 
            filter blur-3xl 
            animate-pulse" 
     aria-hidden="true">
</div>
          <div className=' '>
      <div className="  text-center space-y-6 mt-[30px] flex flex-col items-center">
      <h1 className="text-[30px] md:text-5xl font-extrabold text-white max-w-xl ">
        Turning your <span className="text-green-400">Ideas</span> Into Digital Reality
      </h1><br />
      <p className='text-white text-center max-w-lg text-sm md:text-base'> We craft innovative digital experiences that bring your vision to life — blending creativity, technology, and strategy to build solutions that truly make an impact.</p>
      <div className='flex gap-3 items-center justify-center hidden'>

      <h2 className="  md:text-base  text-white  ">
        What we do best
      </h2>
        <span className="all-services bg-green-400 text-black text-sm md:text-base py-1 px-3 rounded-lg "></span>
      </div>


        <p className="text-xl md:text-2xl text-white px-4 max-w-3xl mx-auto hidden">
          Empowering Your Digital Future with Innovative Tech Solutions
        </p>
      </div>
        <br /><br />
        <div className='flex items-center justify-center gap-4 cursor-pointer '>
          <button className='text-black font-semibold bg-green-500 py-2 px-3 text-xs md:py-2.5 md:px-5 md:text-base rounded-3xl cursor-pointer'>Start Your project <i className="fa-solid fa-arrow-right"></i></button>
          <Link to='projects'>
          <button className=" cursor-pointer  text-white font-semibold py-2 px-3 text-xs md:py-2.5 md:px-6 md:text-base border border-green-400 rounded-3xl hover:bg-green-500 hover:text-black hover:shadow-[0_0_15px_#22c55e] transition-all duration-300 ease-in-out">
            <i className="fa-solid fa-code"></i> View Our Work
          </button>
          </Link>

        </div><br />

          </div><br />

        {/* -------------------some services section----------------- */}
        <div className='flex justify-evenly  text-center opacity-[.9]  w-full'>
          <div className='flex items-center gap-2'>
            <i className="fa-solid fa-code text-green-300  md:text-2xl"></i>
            <p className='text-white font-semibold text-[12px] md:text-base '>Web/App Dev</p>
          </div>
          <div className='flex items-center gap-2'>
            <i className="fa-solid fa-cloud text-green-300 text-lg md:text-2xl"></i>
            <p className='text-white font-semibold text-[12px] md:text-base'>Cloud Solutions</p>

          </div>
          <div className='flex items-center gap-2'>
            <i className="fa-solid fa-shield-halved text-green-300 text-lg md:text-2xl"></i>
            <p className='text-white font-semibold text-[12px] md:text-base'>Cyber Security</p>
          </div>
          <div className='hidden md:flex items-center gap-2'>
            <i className="fa-solid fa-robot text-green-300 text-lg md:text-2xl"></i>
            <p className='text-white font-semibold text-[12px] md:text-base'>AI Solutions</p>
          </div>
        </div><br />

        </div>

        {/* --------------------sponsers------- */}
        </div>
        {/* ------------------trusted by section----------------- */}
        <div className='bg-white text-black  py-7 hidden'>
        <div className='flex items-center justify-center flex-col gap-3 '>

          <p className=' mt-3 font-semibold text-base ml-1 md:text-[18px]'>Rated 5/5 by our clients for quality service delivery</p>
        </div><br /><br />

        <section className="relative z-10 px-6 ">
          {/* 1. Add overflow-hidden here */}
          <div className="max-w-7xl mx-auto overflow-hidden">
            {/* 2. Add 'animate-scroll' and remove 'justify-center' */}
            <div className="flex items-center justify-start gap-12 md:gap-16 animate-scroll cursor-pointer">
              
              {/* 3. Add 'flex-shrink-0' and 'whitespace-nowrap' to ALL items */}
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap border">
                <span className="text-2xl">⚡</span>
                <span>CodeAfrique</span>
              </div>
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">✦</span>
                <span>NaijaTech</span>
              </div>
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">⚡</span>
                <span>SecureConnect</span>
              </div>
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">⟲</span>
                <span>DataFlow</span>
              </div>
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">☁</span>
                <span>CloudBurst</span>
              </div>
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">📱</span>
                <span>AppNaWeb</span>
              </div>

              {/* --- DUPLICATED SET --- */}
              {/* (Remember to add the classes to these too!) */}
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">⚡</span>
                <span>CodeAfrique</span>
              </div>
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">✦</span>
                <span>NaijaTech</span>
              </div>
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">⚡</span>
                <span>SecureConnect</span>
              </div>
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">⟲</span>
                <span>DataFlow</span>
              </div>
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">☁</span>
                <span>CloudBurst</span>
              </div>
              <div className=" text-xl font-semibold flex items-center space-x-2 flex-shrink-0 whitespace-nowrap">
                <span className="text-2xl">📱</span>
                <span>AppNaWeb</span>
              </div>

            </div>
          </div>
        </section>
        </div>
        <div>
          <Services />
        </div>
        {/* ---------------results---------- */}
        <div><br />
          <p className='font-medium leading-[18px] text-[13px] text-center'>SELECTED WORK</p>
          <h1 className='font-medium md:leading-[108px] text-center md:text-[112px] text-[42px] leading-[40px] mb-10'>Proven results, <br /> stunning designs</h1>
          <h1 className='text-center text-2xl font-bold'>2K25</h1><br /><br />
        <div className="grid gap-10">
          {/* First row (2 items) */}
          <div className="flex flex-wrap justify-evenly gap-8">
            {allprojects.slice(0, 2).map((project, index) => (
              <div key={index} className=" max-w-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-[14rem]  rounded-tl-[6px] rounded-br-[6px]  mb-4
                    ${index === 0 ? 'md:w-[537px] md:h-[287px]' : ''}`}
                />
                <h1 className="text-[20px] font-bold mb-2">{project.title}</h1>
                <p className="mb-3 text-[#0C0C0C99]">{project.description}</p>
                <p className="font-semibold text-sm border w-fit  py-1 px-[6px] rounded-3xl">
                  {project.category}
                </p>
              </div>
            ))}
          </div><br />

          {/* Second row (1 item, centered) */}
          <div className="flex justify-center">
            {allprojects.slice(2, 3).map((project, index) => (
              <div key={index} className=" ">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-tl-[10px] rounded-br-[10px] mb-4 w-[637px] h-[387px] "
            />
                <h1 className="text-[20px] font-bold mb-2">{project.title}</h1>
                <p className="mb-3 text-[#0C0C0C99]">{project.description}</p>
                <p className="font-semibold text-sm border w-fit  py-1 px-[6px] rounded-3xl">
                  {project.category}
                </p>
              </div>
            ))}
          </div><br />

          {/* Third row (2 items) */}
          <div className="flex flex-wrap justify-evenly ">
          {allprojects.slice(3, 5).map((project, index) => (
            <div key={index} className="max-w-lg">
              <img
                src={project.image}
                alt={project.title}
                className={`h-[14rem]  mb-4 rounded-tl-[6px] rounded-br-[6px] 
                  ${index === 1 ? 'md:w-[537px] md:h-[287px]' : ''}`}
              />
              <h1 className="text-[20px] font-bold mb-2">{project.title}</h1>
              <p className="mb-3 text-[#0C0C0C99]">{project.description}</p>
              <p className="font-semibold text-sm border w-fit py-1 px-[6px] rounded-3xl">
                {project.category}
              </p>
            </div>
          ))}

          </div>
        </div>
        </div><br />
        <h1 className='font-bold text-right mr-9 text-4xl'><i className="fa-solid fa-arrow-right"></i> All Projects</h1><br />
    <div className="profile-text min-h-screen text-white flex flex-col md:flex-row items-center justify-evenly px-6 py-10">
      <img
        src={me}
        alt="Founder"
        className=" md:w-1/3 rounded-2xl shadow-lg mb-8 md:mb-0"
      />

      <div className="max-w-xl">
        <h1 className="font-bold text-3xl md:text-4xl mb-4">
          Who's Behind <span className="text-green-400">TechVibe Africa</span>
        </h1><br />

        <p className="text-[#0COCOC99] leading-relaxed">
          The founder and creative lead behind <strong>TechVibe Africa</strong> —
          your go-to hub for software development solutions across Africa.
          <br /><br />
          I started TechVibe Africa with a simple mission: to empower young African
          innovators through technology. What began as a solo passion project soon
          grew into a team of forward-thinking developers, designers
          <br /><br />
          I’m still hands-on in every project, leading the creative process, coding,
          and crafting solutions that make an impact — because that’s where I truly
          belong.
        </p>

        <hr className="my-6 border-gray-600" />

        <h1 className="font-semibold text-xl md:text-2xl">SEMANA SHEMA Parfait</h1>
        <h2 className="text-gray-400">Founder & Creative Lead</h2>
      </div>
    </div>
    {/* ---------------frequently question------------- */}
    <div className='flex h-full flex-wrap gap-6 items-center justify-evenly md:h-screen'>
      <div className=' '>
        <h1 className='text-[62px] font-bold'>FAQ</h1><br />
        <p className='text-[#0COCOC99]'>We’ve heard it all. Here’s <br /> everything you need to know <br /> before working with us.</p>
      </div>
 <div className="md:w-[70%] px-4">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="font-bold text-lg mb-2">{faq.question}</h2>
            <i
              className={`fa-solid text-green-600 ${
                activeIndex === index ? "fa-minus" : "fa-plus"
              }`}
            ></i>
          </div>
          {activeIndex === index && (
            <p className="text-[#0COCOC99] mt-2">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>

    </div>

        <Footer />

    </section>
  )
}

export default Hero