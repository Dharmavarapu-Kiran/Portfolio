import React, { useState } from 'react';
import '../Styles/Hero.css';

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
            {/* Simple 3-line icon */}
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navLinks ${isMenuOpen ? 'nav-open' : ''}`}>
            <li><a href='#skills' onClick={closeMenu}>Skills</a></li>
            <li><a href='#projects' onClick={closeMenu}>Projects</a></li>
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
            <button className='Header-Button-1'>View My Work ↓</button>
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
