import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import About from "./pages/About/About";
import Service from "./pages/Services/Service";
import Contact from './pages/Contact/Contact'
import Project from "./pages/Projects/Project";
import Portfolio from "./pages/Portfolio/Portfolio";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<About />}/>
        <Route path="services" element={<Service/>}/>
        <Route path="contact us" element={<Contact/>}/>
        <Route path="projects" element={<Project/>}/>
        <Route path="project/:title" element={<Portfolio />} />


        
      </Routes>

    </BrowserRouter>

  )
}

export default App
