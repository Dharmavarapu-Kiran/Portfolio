import React, { useState } from 'react';
import '../Styles/Hero.css';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 95da6e2a6670d316efff28c51256fe2ea2a414ba

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <div className='Header'>
        <div className='navBar'>
          <h1 className='logo'>KD</h1>

          {/* Hamburger button (visible only on small screens via CSS) */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
<<<<<<< HEAD
=======
            {/* Simple 3-line icon */}
>>>>>>> 95da6e2a6670d316efff28c51256fe2ea2a414ba
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navLinks ${isMenuOpen ? 'nav-open' : ''}`}>
            <li><a href='#skills' onClick={closeMenu}>Skills</a></li>
<<<<<<< HEAD
            <li><a href='https://github.com/Dharmavarapu-Kiran' onClick={closeMenu}>Projects</a></li>
              <li><Link to="/Resume">Resume</Link></li>
=======
            <li><a href='#projects' onClick={closeMenu}>Projects</a></li>
>>>>>>> 95da6e2a6670d316efff28c51256fe2ea2a414ba
            <li><a href='#about' onClick={closeMenu}>About Me</a></li>
            <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
            <li className='btn'>
              <a href='#contact' onClick={closeMenu}>Let's Talk</a>
            </li>
          </ul>
        </div>

        <div className='Hero-Content'>
          <h1 className='Header-Name'>Full&nbsp;Stack</h1>
          <h1 className='Header-Name2'>Developer</h1>
          <p className='Header-Text'>
            I craft exceptional digital experiences that merge cutting-edge <br />
            technology with pixel-perfect design
          </p>
          <div className='Header-Buttons'>
<<<<<<< HEAD
            <a href="https://github.com/Dharmavarapu-Kiran" className="Header-Button-2">View My Work</a>
=======
            <button className='Header-Button-1'>View My Work ↓</button>
>>>>>>> 95da6e2a6670d316efff28c51256fe2ea2a414ba
            <a href="#contact" className="Header-Button-2">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
