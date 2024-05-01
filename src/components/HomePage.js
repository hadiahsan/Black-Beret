import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylings/HomePage.css';

function HomePage() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <h1> Black Beret Installations</h1>
        <h2>Welcome to Black Beret Installations, your trusted partner for a seamless and professional installation experience. Our dedicated team specializes in a wide array of services to enhance your home or business environment. Here's a glimpse of what we offer:</h2>
      </section>

      <section className="about-section">
        <p> </p>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="service-title"> Our Services </div>
        <div className="services-grid">
          <div className="service-item">Sound bar Installation</div>
          <div className="service-item">Security Camera Installation</div>
          <div className="service-item">Accent wall</div>
          <div className="service-item">Basement Framing</div>
          <div className="service-item">Barn wood wall</div>
          <div className="service-item">Gazebo Installation</div>
          <div className="service-item">Kitchen appliances Installation</div>
          <div className="service-item">Home theater installation</div>
          <div className="service-item">Motorized TV Mount Installation</div>
          <div className="service-item">Zebra Blinds Installation</div>
          <div className="service-item">Ultra slim pot lights replacement</div>
          <div className="service-item">Fire place installation</div>
          <div className="service-item">Garage door machines installation</div>
          <div className="service-item">Chandeliers</div>
          <div className="service-item">Event back drops</div>
          <div className="service-item">Back yard fence door locks</div>
          <div className="service-item">Garage racks all types</div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Enjoy immersive audio alongside your stunning visual experience.</h2>
        <h2> Don't settle for a subpar TV setup. Trust the experts at Black Beret Installations Experts to deliver a flawless TV mounting service that enhances your home entertainment and adds a touch of sophistication to your space.</h2>
        <p>Ready to enhance your home entertainment? Get in touch today!</p>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Link to="/quote">
          <button className="cta-button">Get a Quote</button>
        </Link>
      </section>

    </div>
  );
}

export default HomePage;
