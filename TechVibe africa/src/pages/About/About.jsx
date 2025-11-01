import React,{useState} from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import about from '../../assets/about/about1.jpg'

function About() {
    const [visible,setVisible]=useState("about")
  return (
    <section>
      <Navbar variant="about" />
      <div className="relative">
        <img 
          src={about} 
          alt="about bg" 
          className="h-[40vh] w-full object-cover brightness-[0.3]" 
        />
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center"><br />
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-2">
            Discover who we are and what drives us forward
          </p>
        </div>
      </div>
<div className="about-content text-white  flex flex-wrap items-center justify-evenly px-6 py-10 min-h-screen ">
  {/* Left Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img src={about} alt="About TechVibe Africa" className="rounded-xl md:w-3/4" />
  </div>

  {/* Right Content */}
  <div className="w-full md:w-1/2 text-white ">
  {visible === "about" &&
  <div>

    <h2 className="mb-2  font-medium">About Us</h2>
    <h1 className="font-semibold text-2xl mb-4">We Always Make The Best</h1>
    <p className="md:w-3/4 leading-relaxed">
      TechVibe Africa is a forward-thinking tech company that provides innovative digital
      solutions across Africa. We specialize in web and app development, cybersecurity, and
      IT services designed to help businesses and individuals grow in the digital world.
      Our focus is on creativity, reliability, and using technology to make a positive impact.
    </p>
  </div>
  }
  {visible === "vision" &&
    <div>

    <h2 className="mb-2  font-medium">Our vision</h2>
    <h1 className="font-semibold text-2xl mb-4">Leading Africa’s Digital Future</h1>
    <p className="md:w-3/4 leading-relaxed">
     To become Africa’s leading technology hub, driving digital innovation and
      empowering communities with sustainable, world-class tech solutions that inspire progress and opportunity.
    </p>
  </div>
  }
    {visible ==="mission" &&
    <div>

    <h2 className="mb-2  font-medium">Our Mission</h2>
    <h1 className="font-semibold text-2xl mb-4">Empowering Africa with Technology</h1>
    <p className="md:w-3/4 leading-relaxed">
    Our mission is to deliver high-quality, affordable, and secure technology services that help 
    individuals, startups, and enterprises thrive in the digital era. We aim to bridge the gap 
    between technology and everyday life by providing reliable IT solutions, fostering young talent, 
    and supporting Africa’s growth through digital transformation.
    </p>
  </div>
    }
    {visible === "goal" &&
    <div>

    <h2 className="mb-2  font-medium">Our GOAL</h2>
    <h1 className="font-semibold text-2xl mb-4">Driving Innovation Across Africa</h1>
    <p className="md:w-3/4 leading-relaxed">
        Our goal is to build a connected and innovative Africa powered by technology. We strive to
        create impactful digital products, nurture future tech leaders, and expand our services
        across the continent—making TechVibe Africa a symbol of innovation, trust, and excellence in the world of technology.
    </p>
  </div>
    }

<div className="flex flex-wrap gap-3 mt-6 z-50 relative">
  <button
    onClick={() => setVisible("about")}
    className={`font-semibold rounded-xl py-1 px-3 transition-all cursor-pointer ${
      visible === "about"
        ? "bg-green-500 text-black border-none"
        : "border text-white hover:bg-black hover:text-green-400"
    }`}
  >
    About Us
  </button>

  <button
    onClick={() => setVisible("vision")}
    className={`font-semibold rounded-xl py-1 px-3 transition-all cursor-pointer ${
      visible === "vision"
        ? "bg-green-500 text-black border-none"
        : "border text-white hover:bg-black hover:text-green-400"
    }`}
  >
    Vision
  </button>

  <button
    onClick={() => setVisible("mission")}
    className={`font-semibold rounded-xl py-1 px-3 transition-all cursor-pointer ${
      visible === "mission"
        ? "bg-green-500 text-black border-none"
        : "border text-white hover:bg-black hover:text-green-400"
    }`}
  >
    Mission
  </button>

  <button
    onClick={() => setVisible("goal")}
    className={`font-semibold rounded-xl py-1 px-3 transition-all cursor-pointer ${
      visible === "goal"
        ? "bg-green-500 text-black border-none"
        : "border text-white hover:bg-black hover:text-green-400"
    }`}
  >
    Goal
  </button>
</div>

  </div>
  <div className='flex flex-wrap items-center justify-evenly gap-7   mt-5'>
    <div className="w-full md:w-1/2  justify-center">
        <h1 className='mb-4 font-bold text-3xl'>Our skills</h1>
        <p>At TechVibe Africa, we excel in web and mobile app development, cybersecurity, and IT solutions. We combine creativity, technical expertise, and problem-solving to deliver high-quality digital products that help businesses and individuals succeed in the digital world.</p><br />
<div className="flex flex-col gap-6 w-full max-w-md">

  <div>
    <div className='flex justify-between mb-1'>
    <p className="mb-1 font-medium">Web Development</p>
    <p>80%</p>
    </div>
    <div className="w-full bg-gray-300 rounded-full h-4">
      <div className="bg-blue-500 h-4 rounded-full" style={{ width: "80%" }}></div>
    </div>
  </div>


  <div>
     <div className='flex justify-between mb-1'>
    <p className="mb-1 font-medium">Cloud Solution</p>
    <p>80%</p>
    </div>
    <div className="w-full bg-gray-300 rounded-full h-4">
      <div className="bg-green-500 h-4 rounded-full" style={{ width: "70%" }}></div>
    </div>
  </div>


  <div>
     <div className='flex justify-between mb-1'>
    <p className="mb-1 font-medium">App Development</p>
    <p>80%</p>
     </div>
    <div className="w-full bg-gray-300 rounded-full h-4">
      <div className="bg-yellow-500 h-4 rounded-full" style={{ width: "85%" }}></div>
    </div>
  </div>
</div>

    </div>

    <div className='grid grid-cols-2 text-center gap-3'>
        <div className='text-center'>
            <h1 className='font-bold text-3xl'>5+</h1>
            <p>Year of experience</p>
        </div>
        <div>
            <h1 className='font-bold text-3xl'>47+</h1>
            <p>Projects Done</p>
        </div>
        <div>
            <h1 className='font-bold text-3xl'>125+</h1>
            <p>Satisified clients</p>
        </div>
        <div>
            <h1 className='font-bold text-3xl'>50+</h1>
            <p>Certified Awards</p>
        </div>
    </div>
  </div>
</div>

      <Footer />
    </section>
  )
}

export default About
