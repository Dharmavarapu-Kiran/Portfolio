import React, { useEffect } from "react";
import Hero from './Components/Hero';
import About from './Components/About'; 
import Skills from './Components/Skills';
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  
  useEffect(() => {
  AOS.init({
    duration: 500,
    easing: "ease-in-out",
    once: false,
    mirror: true,
  });
}, []);


  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
