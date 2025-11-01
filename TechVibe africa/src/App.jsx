import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import About from "./pages/About/About";
import Service from "./pages/Services/Service";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<About />}/>
        <Route path="services" element={<Service/>}/>
      </Routes>

    </BrowserRouter>

  )
}

export default App
