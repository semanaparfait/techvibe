import React,{useState} from 'react'
import './Service.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import service from '../../assets/services/service.jpg'
import {
  Laptop,
  ShieldCheck,
  CloudCog,
  Cpu,
  Layout,
  Wrench,
  Repeat,
  BookOpen,
} from "lucide-react";
import './Service.css'
function Service() {
  const [isVisible, setIsVisible] = useState(false);
const services = [
  { icon: Laptop, title: "Web & App Development", description: "We craft responsive websites and scalable apps that deliver seamless performance and an exceptional user experience.", buttonText: "Explore Web & AppDev" },
  { icon: ShieldCheck, title: "Cybersecurity Solutions", description: "Protect your digital assets with our end-to-end security services, from risk assessment to threat monitoring.", buttonText: "Secure Your Data" },
  { icon: CloudCog, title: "AI & Cloud Integration", description: "Empower your business with AI-driven insights and cloud-based automation to enhance productivity and growth.", buttonText: "Unlock AI Power" },
  { icon: Cpu, title: "IT Consulting & Strategy", description: "Leverage expert guidance to align your technology strategy with your business goals for long-term success.", buttonText: "Get Strategic Advice" },
  { icon: Layout, title: "UI/UX Design", description: "We design stunning, user-centered interfaces that improve engagement and create lasting impressions.", buttonText: "View Our Designs" },
  { icon: Wrench, title: "System Maintenance & Support", description: "Our team provides continuous monitoring, updates, and technical support to keep your systems running smoothly.", buttonText: "Get Support" },
  { icon: Repeat, title: "DevOps & Automation", description: "Streamline your development process with CI/CD pipelines, automation, and cloud infrastructure optimization.", buttonText: "Boost Efficiency" },
  { icon: BookOpen, title: "Tech Training & Workshops", description: "We empower teams and individuals with hands-on training in programming, cybersecurity, and emerging technologies.", buttonText: "Join a Session" },
];
  return (
    <section className='servicespage-body'>
      <Navbar variant="about" />
            <div className="relative">
              <img 
                src={service} 
                alt="about bg" 
                loading='lazy'
                className="h-[40vh] w-full object-cover  brightness-[0.3]" 
              />
              {/* Overlay text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center"><br />
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                  Services
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mt-2">
                  We Create. We Build. We Deliver the Best.
                </p>
              </div>
            </div>
            <div >
                <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-white hidden">
          🔥 Smart. Fast. Future-Ready.
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto hidden">
          Building technology that inspires, connects, and transforms Africa and the world.
        </p>
      </div>
            <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            // <div
            //   key={index}
            //   className="service-card gap-4 p-6 rounded-2xl bg-[#212020]"
            // >
               <div
               key={index}
               className=" backdrop-blur-lg border border-[#2bc88c33] rounded-2xl p-8  hover: transition-all duration-500 hover:-translate-y-2">
              <div className="text-[#2bc88c] text-4xl mb-4">
                <Icon size={40} color="#00FFC2" />
              </div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p><br />
              <p className='text-white'>Learn more <i className="fa-solid fa-arrow-right"></i></p>
              <button className="service-card-btn hidden bg-green-400 cursor-pointer text-black rounded-2xl py-1 px-3 w-fit hover:bg-green-300 transition">
                {service.buttonText} <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          );
        })}
      </div>
              </div>
              <div className='mb-10 hidden'>
            <h2 className="steps-title text-3xl md:text-4xl font-extrabold text-center mb-3 text-white ">
          Our Simple Process
          </h2>
<div className="grid md:grid-cols-4 items-center justify-evenly gap-6 text-center text-white ">
  {/* Step 1 */}
  <div className='flex flex-col items-center'>
    <h1 className=" step-number bg-[#07669c]">1</h1>
  <div className=" step-description1  bg-[#07669c] rounded-l-2xl py-4">
    <h2 className="text-[18px] font-semibold mb-2">Discovery & Planning</h2>
    <p className="text-slate-300 text-[13px]  ">
      We identify goals, define the project scope,  clear strategy
      that aligns with your vision.
    </p>
  </div>
  </div>
  
  

  {/* Step 2 */}
 <div className='flex flex-col items-center'>

    <h1 className=" step-number bg-yellow-500 ">2</h1>
  <div className="step-description2 py-4 bg-yellow-500 backdrop-blur-md rounded-l-2xl border border-gray-800 hover:border-green-400 transition-all duration-300">
    <h2 className="text-xl font-semibold mb-2">Design & Prototyping</h2>
    <p className="text-slate-300 text-[13px]  ">
      We craft a user-focused design and build prototypes to visualize the
      product 
    </p>
  </div>
  </div>
 
  {/* Step 3 */}
 <div className='flex flex-col items-center'>

    <h1 className=" step-number bg-cyan-400">3</h1>
  <div className="step-description3 py-4 bg-cyan-400 backdrop-blur-md rounded-l-2xl border border-gray-800 hover:border-green-400 transition-all duration-300">
    <h2 className="text-xl font-semibold mb-2">Development & Testing</h2>
    <p className="text-slate-300 text-[13px]  ">
      Our developers turn ideas into reality through clean code and rigorous
      testing .
    </p>
  </div>
  </div>
 
  {/* Step 4 */}
 <div className='flex flex-col items-center'>

    <h1 className=" step-number bg-green-600">4</h1>
  <div className="py-4 bg-green-600 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-green-400 transition-all duration-300">
    <h2 className="text-xl font-semibold mb-2"> Maintenance</h2>
    <p className="text-slate-300 text-[13px]  ">
      We launch your product,  and provide continuous
      updates to keep it future-ready.
    </p>
  </div>
  </div>
</div>
        
              </div>
<div className='w-full md:w-1/2 flex flex-col items-center justify-center md:mx-auto hidden  '>
<i className="fa-solid fa-lightbulb text-center text-white text-[550px] m-auto z-50 overflow-hidden  "></i>
  <div className='steps-container w-full flex flex-col items-center absolute overflow-hidden'>
    
    {/* Step 1 */}
    <div className='more-steps step1 bg-yellow-400 flex items-center  rounded-t-full justify-center gap-3 w-[60%] overflow-hidden'>
      {/* <div > */}
        <h2 className=" font-semibold ">Discovery & Planning</h2>
        {/* <p className="text-slate-300 text-[13px]">Define goals and strategy.</p> */}
      {/* </div> */}
      <h1 className='text-xl font-bold '>01</h1>
    </div>
    

    {/* Step 2 */}
    <div className='more-steps step2 bg-red-500 flex items-center p-4 justify-center w-[60%]  gap-3'>
      <h1 className='text-xl font-bold mr-4'>02</h1>
      <div>
        <h2 className="text-xl font-semibold mb-1">Design & Prototyping</h2>
        <p className="text-slate-300 text-[13px]">Create designs and prototypes.</p>
      </div>
    </div>

    {/* Step 3 */}
    <div className='more-steps step3 bg-purple-700 flex items-center p-4  justify-center gap-3 w-[64.3%] '>
      <div>
        <h2 className="text-xl font-semibold mb-1">Development & Testing</h2>
        <p className="text-slate-300 text-[13px]">Build and test reliably.</p>
      </div>
      <h1 className='text-xl font-bold mr-4'>03</h1>
    </div>

    {/* Step 4 */}
    <div className='more-steps step4 bg-blue-800 flex items-center p-4  justify-center gap-3 w-[58%] ' >
      <h1 className='text-xl font-bold mr-4'>04</h1>
      <div>
        <h2 className="text-xl font-semibold mb-1">Maintenance</h2>
        <p className="text-slate-300 text-[13px]">Launch and update continuously.</p>
      </div>
    </div>

    {/* Step 5 */}
    <div className='more-steps step5 bg-green-600 flex items-center justify-center p-3 gap-3  w-[43%]'>
      <div >
        <h2 className="text-xl font-semibold mb-1 ">Extra Step</h2>
        <p className="text-slate-300 text-[13px] ">Visualize product experience.</p>
      </div>
      <h1 className='text-xl font-bold mr-4'>05</h1>
    </div>
    <div className='bg-yellow-500 h-3 w-[30%] mt-4 rounded-lg'></div>
    <div className='bg-yellow-500 h-3 w-[25%] mt-4 rounded-lg'></div>
    <div className='bg-yellow-500 h-2 w-[16%] mt-4 rounded-lg'></div>


  </div>
</div>




      <div className="flex items-center justify-center ">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 w-[95%] md:w-[90%]  rounded-3xl p-12 text-center shadow-2xl border-none border-slate-700 transition-all duration-1000 delay-700">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our services to transform their business operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
              Start Free Trial
              <i className="fa-solid fa-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>

            <button className="px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div><br /><br />
      

      <Footer/>
    </section>
  )
}

export default Service