import React from 'react';
import '../Stylings/ContactUsPage.css';

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
        <form className="contact-form" action="https://formspree.io/f/mnqkylwq" method="POST">
          <label>
          Name:
          <input type="text" className="text-box" name="name"  />
          </label>

          <label>
          Email:
          <input type="text" className="text-box" name="name"  />
          </label>

          <label>
          Message:
          <input type="text" className="text-box" name="name"  />
          </label>

          <button type="submit">Send Message</button>
        </form>
    </div>
  );
}

export default ContactUsPage;
