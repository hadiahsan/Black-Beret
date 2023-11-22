import React from 'react';
import './Stylings/ContactUsPage.css';

function ContactUsPage() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>If you have any questions or need assistance, feel free to reach out to us.</p>
          <p><strong>Email:</strong> info@blackberetinstallations.com</p>
          <p><strong>Phone:</strong> +1 234 567 8901</p>
          <p><strong>Address:</strong> City, Country</p>
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
    </div>
  );
}

export default ContactUsPage;
