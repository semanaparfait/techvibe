import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import projectBg from '../../assets/projects/project.jpg';
import { Link } from "react-router-dom";
import projects from '../Data/Projects';
import './Project.css'

function Project() {
  return (
    <section>
      <Navbar variant="about" />
      <div className="relative">
        <img 
          src={projectBg} 
          alt="about bg" 
          className="h-[40vh] w-full object-cover brightness-[0.3]" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-2">
            Take a look at what we’ve been working on.
          </p>
        </div>
      </div>

      <div className='projects-container text-white py-10'>
        <ul className="flex gap-4 pl-6 font-semibold text-[18px] flex-wrap cursor-pointer">
          <li className="bg-green-950 px-3 py-1 rounded-tl-2xl rounded-br-2xl w-fit text-white hover:bg-green-700 hover:scale-105 transition-all duration-300">
            All
          </li>
          <li className="px-3 py-1 rounded-tl-2xl rounded-br-2xl text-gray-200 hover:bg-green-800 hover:text-white hover:scale-105 transition-all duration-300">
            Logo Design
          </li>
          <li className="px-3 py-1 rounded-tl-2xl rounded-br-2xl text-gray-200 hover:bg-green-800 hover:text-white hover:scale-105 transition-all duration-300">
            Web Design
          </li>
          <li className="px-3 py-1 rounded-tl-2xl rounded-br-2xl text-gray-200 hover:bg-green-800 hover:text-white hover:scale-105 transition-all duration-300">
            Mobile App
          </li>
        </ul>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col items-center relative overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-[20rem] h-[14rem] rounded-tl-3xl rounded-br-3xl object-cover"
              />

              <Link
                to={`/project/${encodeURIComponent(project.title)}`}
                className="bg-green-950 text-white font-semibold text-[18px] px-6 py-3 rounded-tl-2xl rounded-br-2xl absolute bottom-4 hover:bg-green-700 transition-colors duration-300 flex justify-center"
              >
                {project.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Project;
