import React from "react";
import './Contact.css'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contact(){
    return(
        <section className="contact-container">
             <Navbar variant="about" />
      <div className="relative">
        <img 
          src="https://i.pinimg.com/736x/94/84/1e/94841e4bd098959bf7173166f7e67495.jpg" 
          alt="about bg" 
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

      <div className="flex flex-wrap justify-evenly items-center gap-4">
        <div>
            <form className="flex flex-col  gap-3 w-fit ">
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full">
            <input 
                type="email" 
                placeholder="Email" 
                className="border px-3 py-2 rounded-2xl w-full sm:w-[48%] outline-none "
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
        </div>
        <div className="px-3 md:w-[30%] rounded-2xl bg-cover bg-center brightness-[0.3] "   style={{
    backgroundImage: "url('https://i.pinimg.com/736x/eb/24/b9/eb24b91c97f40e4ab8c180ee9f4cab9c.jpg')"
  }}>
            
            <div
            className="flex  inset-0 flex-col text-center gap-3 px-4 py-3  "

            >
            <h2 className="font-medium text-lg text-white ">Our NewsLetters</h2>
            <p className="text-white ">
                Stay updated with our latest news, projects, and community highlights.
                Enter your email below to join our mailing list.
            </p>
            <input
                type="email"
                placeholder="Email"
                className="border px-3 py-1.5 rounded-2xl outline-none"
            />
            <button className="bg-green-950 text-white py-2 rounded-2xl font-medium">
                Submit <i className="fa-solid fa-paper-plane"></i>
            </button>
            </div>


        </div>
      </div><br /><br />

        <div className="text-white  py-10 px-6">
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 text-center md:text-left">

            {/* Phone */}
            <div className="space-y-2 max-w-xs bg-green-950 py-7 px-4 rounded-2xl">
            <div className="flex items-center justify-center md:justify-start gap-2">
                <i className="fa-solid fa-phone-volume text-green-400 text-3xl"></i>
                <p className="font-semibold">(+250) 787 845 162</p>
            </div>
            <p className="text-gray-300 text-sm">
                Reach us anytime for inquiries or support — we’re here to help you 24/7.
            </p>
            </div>

            {/* Email */}
            <div className="space-y-2 max-w-xs bg-green-900 py-5 px-4 rounded-2xl">
            <div className="flex items-center justify-center md:justify-start gap-2">
                <i className="fa-solid fa-envelope text-green-400 text-3xl"></i>
                <div>
                <p className="font-semibold">techvibe@info.org</p>
                <p className="font-semibold">techvibe@info.com</p>
                </div>
            </div>
            <p className="text-gray-300 text-sm">
                Send us your questions or partnership requests via email.
            </p>
            </div>

            {/* Location */}
            <div className="space-y-2 max-w-xs bg-green-800 py-7 px-4 rounded-2xl">
            <div className="flex items-center justify-center md:justify-start gap-2">
                <i className="fa-solid fa-location-dot text-green-400 text-3xl"></i>
                <p className="font-semibold">Kigali, Rwanda</p>
            </div>
            <p className="text-gray-300 text-sm">
                Visit our main office in Kigali for direct consultation and collaboration.
            </p>
            </div>

        </div>
        </div>
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


            <Footer/>
        </section>
    )
}
export default Contact;