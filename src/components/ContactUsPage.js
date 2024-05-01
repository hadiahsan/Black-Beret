import React from 'react';
import '../Stylings/ContactUsPage.css';

function ContactUsPage() {
  return (
    <div className="contact-container">
    <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-header">
          <h2>If you have any questions or need assistance, feel free to reach out to us.</h2>
          <p>blackberetinstallations@gmail.com</p>
          <p>+1 647-807-6052</p>
          <p>London, Ontario</p>
        </div>
      </div>
        <form className="contact-form" action="https://formspree.io/f/mvoeddnj" method="POST">
          <label>
          Name: *
          <input type="text" className="text-box" name="Name" required />
          </label> 

          <label>
          Email: *
          <input type="text" className="text-box" name="Email" required />
          </label>

          <label>
          Message:
          <input type="text" className="text-box" name="Message"  />
          </label>

          <button type="submit">Send Message</button>
        </form>
    </div>
  );
}

export default ContactUsPage;
