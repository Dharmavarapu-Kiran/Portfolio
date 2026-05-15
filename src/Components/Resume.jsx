import React from "react";
import "../Styles/Resume.css";

function Resume() {
  return (
    <div className="resume-page">

      {/* Resume Container */}
      <div className="resume-wrapper">
        <h1 className="resume-title">My Resume</h1>

        {/* Resume Preview (iframe or image or PDF embed) */}
        <iframe
          src="/Kiran-Resume.pdf"
          className="resume-display"
          title="Resume Preview"
        ></iframe>

        {/* Download Button */}
        <a 
          href="/Kiran-Resume.pdf"
          download
          className="resume-download-btn"
        >
          Download Resume
        </a>
      </div>

    </div>
  );
}

export default Resume;
