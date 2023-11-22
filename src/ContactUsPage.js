import React from 'react';
import './Stylings/ContactUsPage.css';

function ContactUsPage() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-header">
          <h2>If you have any questions or need assistance, feel free to reach out to us.</h2>
          <p>info@blackberetinstallations.com</p>
          <p> +1 234 567 8901</p>
          <p>City, Country</p>
      </div>
        </div>
        <form className="contact-form" action="https://formspree.io/f/xnqkykdk" method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
    </div>
  );
}

export default ContactUsPage;
