import React from 'react';
import '../Styles/Skills.css';

function Skills() {
  return (
    <div className='Skills-Page'>
       <main className="skills-wrapper" id="skills">
        <div className='Skill-header'>
        <div className="section-label" data-aos="fade-right" data-aos-delay="10">My Expertise</div>
        <h2 className="section-title" data-aos="fade-right" data-aos-delay="25">Skills & Technologies</h2>
        <div className="Header-Underline"></div>
        </div>
        <div className='Skills-Grid'>
            <div className='Skill-card' data-aos="fade-up" data-aos-delay="50">
                <div className="underline-frontend"></div>
                <h3>Frontend Development</h3>
                <ul className='Card1-items'>
                    <li>React.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Responsive Design</li>
                </ul>
            </div>
            <div className='Skill-card'  data-aos="fade-up" data-aos-delay="100">
                 <div className="underline-backend"></div>
                <h3>Backend Development</h3>
               <ul className='Card2-items'>
                <li>MYSQL</li>
                <li>JDBC</li>
                <li>Spring Boot</li>
                <li>RESTful APIs</li>
               </ul>
            </div>
            <div className='Skill-card'  data-aos="fade-up" data-aos-delay="150">
                 <div className="underline-devops"></div>
                <h3>Version Control & Deployment</h3>
               <ul className='Card3-items'>
                <li>Git & GitHub</li>
                <li>CI/CD Pipelines</li>
                <li>Varcel</li>
                <li>AWS Fundamentals</li>
               </ul>
            </div>
            <div className='Skill-card'  data-aos="fade-up" data-aos-delay="200">
                 <div className="underline-design"></div>
                <h3>Design</h3>
               <ul className='Card4-items'>
                <li>Figma</li>
                <li>UI/UX</li>
                <li>Responsive Design</li>
                <li>Automation</li>
               </ul>
            </div>
        </div>

       </main>
    </div>
  )
}

export default Skills