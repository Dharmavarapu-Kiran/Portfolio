import React from 'react';
import '../Styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container" id="contact">

      
      <div className='Contact-Header'>
        <h3 className='Contact-message'>Get In Touch</h3>
        <h1 className='Contact-Heading'>Contact Me</h1>
        <div className='Contact-Underline'></div>
      </div>

     
      <div className='Contact-Body'>

   
        <section className='Leftside-Contact'>
          <h3>Have a Project in mind?</h3>
          <p>
            I'm currently available for freelance work and exciting projects.
            If you have a project that you want to get started or think you need
            my help with something, then get in touch.
          </p>

       
          <div className='Contact-Email'>
            <div className='Email-Icon'>
              <i className="bi bi-envelope"></i>
            </div>

            <div className='Email-Address'>
              <h4>Email Me At</h4>
              <a href="mailto:dharmavarapukiran4@gmail.com">
                dharmavarapukiran4@gmail.com
              </a>
            </div>
          </div>

          <div className='Social-Media'>
            <div className='Connect'>Connect with me</div>

            <div className='Socialmedia-icons'>
              <a href="https://www.linkedin.com/in/kiran-dharmavarapu-9273a8232/"
                 target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://www.instagram.com/kiran_dharmavarapu/"
                 target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </section>

       
        <section className='Rightside-Contact'>
          <form>
            <input type="text" name="name" placeholder='Your Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>

            <button type="submit" className='btn btn-primary'>
              Send Message <i className="bi bi-send"></i>
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}

export default Contact;
