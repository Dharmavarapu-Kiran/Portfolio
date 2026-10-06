import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-text">
        © {new Date().getFullYear()} Kiran Dharmavarapu. All Rights Reserved.
      </p>

      <div className="footer-socials">
<<<<<<< HEAD
        <a href="https://www.linkedin.com/in/dharmavarapu-kiran-4241a6333/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>

        <a href="https://github.com/Dharmavarapu-Kiran/Portfolio" target="_blank" rel="noreferrer">
=======
        <a href="https://www.linkedin.com/in/kiran-dharmavarapu-9273a8232/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>

        <a href="https://github.com/Dharmavarapu-Kiran" target="_blank" rel="noreferrer">
>>>>>>> 95da6e2a6670d316efff28c51256fe2ea2a414ba
          <i className="bi bi-github"></i>
        </a>

        <a href="https://www.instagram.com/kiran_dharmavarapu/" target="_blank" rel="noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
