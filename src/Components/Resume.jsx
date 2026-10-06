import React from "react";
import "../Styles/Resume.css";

function Resume() {
  return (
    <div className="resume-page">
      <h1>My Resume</h1>

      <div className="resume-container">
        <iframe
          src="/Kiran-Resume.pdf#view=FitH"
          title="Kiran Resume"
          className="resume-pdf"
        />
      </div>

      <a
        href="/Kiran-Resume.pdf"
        download="Kiran-Resume.pdf"
        className="download-btn"
      >
        Download Resume
      </a>
        
    </div>
  );
}

export default Resume;
