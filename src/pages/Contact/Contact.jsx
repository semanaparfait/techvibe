import React from "react";
import './Contact.css'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contact(){
    return(
      <section>

             <Navbar variant="about" />
        <section className="contact-container">
      <div className="relative">
        <img 
          src="https://i.pinimg.com/736x/94/84/1e/94841e4bd098959bf7173166f7e67495.jpg" 
          alt="contact us bg" 
          className="h-[40vh] w-full object-cover brightness-[0.3]" 
        />
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center"><br />
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-2">
            We’d love to hear from you! Whether you have a question
          </p>
        </div>
      </div><br />

      <div className="flex flex-wrap justify-evenly items-center gap-4 text-white px-4">
                <div>
        <h1 className="font-semibold text-[30px]">Get in touch</h1>
        <p>Have a project in mind or just want to say hi? We’d love <br /> to hear from you </p><br />
        <div className="flex flex-col gap-4">

            {/* Email */}
            <div >
            <div className="flex items-center justify-center md:justify-start gap-2">
                <i className="fa-solid fa-envelope text-green-400 text-3xl"></i>
                <div>
                <h1 className="font-semibold text-lg">Email us</h1>
                <p className="text-gray-500">techvibe@info.org</p>
                <p className="text-gray-500">techvibe@info.com</p>
                </div>
            </div>
            </div>

            {/* Location */}
            <div >
            <div className="flex items-center justify-center md:justify-start gap-2">
                <i className="fa-solid fa-location-dot text-green-400 text-3xl"></i>
                <div>
                <h1 className="font-semibold text-lg">Head Office</h1>
                <p className="text-gray-500">Kigali, Rwanda</p>
                <p className="text-gray-500">Kigali, Rwanda</p>
                </div>
            </div>

            </div>
                    {/* Phone */}
            <div >
            <div className="flex items-center justify-center md:justify-start gap-2">
                <i className="fa-solid fa-phone-volume text-green-400 text-3xl"></i>
                <div>
                <h1 className="font-semibold text-lg">Call us</h1>
                <p className="text-gray-500">(+250) 787 845 162</p>
                <p className="text-gray-500">(+250) 787 845 162</p>
                </div>
            </div>
        </div>

            </div><br />
            <hr /><br />
            <h1>Follow our social media</h1>
            <div className='cursor-pointer'><br />
          <i className="fa-brands fa-facebook text-2xl"></i>
          <i className="fa-brands fa-square-instagram text-2xl"></i>
          <i className="fa-brands fa-square-github text-2xl"></i>
          <i className="fa-brands fa-linkedin text-2xl"></i>
        </div>
        </div>
        {/* <div> */}
            <form className="flex flex-col  gap-3 w-fit z-20">
              <h1 className="font-semibold text-[30px]">Send us a message</h1>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full">
            <input 
                type="email" 
                placeholder="Email" 
                className="border px-3 py-2 rounded-2xl w-full sm:w-[48%] outline-none text-black"
            />
            <input 
                type="tel" 
                placeholder="Phone number" 
                className="border px-3 py-2 rounded-2xl w-full sm:w-[48%] outline-none "
            />
            </div>

                <input type="text" placeholder="Name"  className="border px-3 py-1.5 rounded-2xl outline-none"/>
                <textarea  cols="28" rows="10" placeholder="Enter your Message" className="border px-4 resize-none rounded-2xl outline-none "></textarea>
            <button className="bg-green-950 text-white py-2 rounded-2xl font-medium">Submit <i className="fa-solid fa-paper-plane"></i></button>
            </form>
        {/* </div> */}

      </div><br /><br />


      {/* Google Map */}
      <div className="w-full flex justify-center mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.429523133115!2d30.078298073633505!3d-1.9827701979992898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6108d6db08d%3A0xbfc486d1fb045285!2sKK%20567%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1762276549094!5m2!1sen!2srw"
          width="90%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TechVibe Rwanda Map"
          className="rounded-2xl"
        ></iframe>
      </div>


        </section>
            <Footer/>
      </section>
    )
}
export default Contact;