import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div className="page">
      <main className="about-wrapper" id="about">
        <section className="about-left">
          <div className="about-tag">About Me</div>

          <h1 className="hero-title">
            I’m a <span>creative developer</span> who loves building amazing web experiences.
          </h1>

          <p className="hero-text">
            With over <strong>2 years of experience</strong> in full-stack development,
            I specialize in creating high-performance web applications that not
            only look stunning but also deliver exceptional user experiences.
            My passion lies in turning complex problems into elegant, simple solutions.
            <br /><br />
            I work with modern technologies including <strong>React</strong>,
            <strong>SpringBoot</strong>, <strong>JavaScript</strong> and cloud platforms
            to build scalable applications.
          </p>
        </section>

       
        <section className="about-right">
          <div className="section-label">Who I Am</div>
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>

          <div className="cta-row">
            <p className="cta-helper">Available for freelance &amp; full-time roles.</p>
          </div>

          <div className="stats-grid">
            <article className="stat-card">
              <p className="stat-label">Years Experience</p>
              <p className="stat-value">2+ <span>Years</span></p>
            </article>

            <article className="stat-card">
              <p className="stat-label">Projects Completed</p>
              <p className="stat-value">10+ <span>Projects</span></p>
            </article>

            <article className="stat-card">
              <p className="stat-label">Code Commits</p>
              <p className="stat-value">1k+ <span>Commits</span></p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
