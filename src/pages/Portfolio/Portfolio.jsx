import React,{useEffect,useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Portfolio.css'
import About from '../About/About'
import { useParams } from "react-router-dom";
import projects from '../Data/Projects';

function Portfolio() {
    const {title} = useParams();
      const project = projects.find(
    (p) => p.title === decodeURIComponent(title)
  );

  if (!project) return <p className="text-white p-6">Project not found</p>;
  return (
    <section>
        <Navbar variant="about" />
        <div className='portfolio-container text-white '><br />
        <h1 className='text-4xl md:text-6xl font-bold text-center mt-16 text-green-500'>{project.title}</h1><br /><br />
        <div className='grid md:grid-cols-2  gap-6 px-4'>
            <div className=''>
                <img 
                    src={project.image}
                    alt={project.title}
                className='rounded-tl-3xl rounded-br-3xl' />
            </div>
            <div className=' flex flex-col '>
                <h1 className=' font-bold text-5xl'>{project.title}</h1><br />
                <p>{project.description}</p><br />
                <div></div>
                <p className='text-green-500 font-bold text-2xl'>Category</p>
                <h2>Web design</h2><br />
                <p className='text-green-500 font-bold text-2xl'>Project URL</p>
                <p>https://movieland.me/</p><br />
                <button className='bg-green-900 py-2 px-5 w-fit rounded-tl-2xl rounded-br-2xl'>Visit site</button>
            </div>

        </div>
        </div>
        <Footer />
    </section>
  )
}

export default Portfolio