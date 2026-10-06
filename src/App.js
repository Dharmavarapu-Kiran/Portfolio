import React, { useEffect } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Router>
      <Routes>

        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Resume Page Route */}
        <Route
          path="/Resume"
          element={
            <>
              
              <Resume />
              <Footer />
            </>
          }
        />

      </Routes>
    </Router>
=======
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
>>>>>>> 95da6e2a6670d316efff28c51256fe2ea2a414ba
  );
}

export default App;
