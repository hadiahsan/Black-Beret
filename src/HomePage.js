import React from 'react';
import { Link } from 'react-router-dom';
import './Stylings/HomePage.css';


function HomePage() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <h1> Black Beret Installations</h1>
        <h2>Elevate Your Viewing Experience with Professional TV Mounting</h2>
        <p>At Black Beret Installations , we understand that your television isn't just a device; it's the centerpiece of your home entertainment. That's why we offer top-notch TV mounting services to elevate your viewing experience to a whole new level. Our team of highly skilled technicians specializes in seamlessly mounting your TV on any wall type, whether it's drywall, concrete, or brick. We take care of all the details, ensuring a secure and aesthetically pleasing installation that complements your home decor.</p>     
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h1>Black Beret Installations</h1>
        <p>Your trusted partner in home entertainment installation</p>
        <h3>Expertise You Can Trust</h3> 
        <p> Our technicians are experienced professionals who have successfully mounted TVs of all sizes and brands.</p>

        <h1>Customized Solutions</h1> <p>We work with you to determine the ideal TV placement and height for optimal viewing comfort.</p>

<h1>Concealed Wiring (where technically possible)</h1> <p>Say goodbye to unsightly cables. We'll hide them neatly for a clean and clutter-free look.</p>
<h1>Safety First</h1> <p>Your safety is our priority. We use only top-quality mounting brackets and secure installation methods.</p>
<h1>Fast and Efficient</h1> <p>We complete the job quickly, allowing you to enjoy your favorite shows and movies in no time.</p>
<p>Whether you want your TV in the living room, bedroom, or even outdoors, we've got you covered.</p>
      

      </section>

      {/* Services Overview */}
      <section className="services-section">
        <h2>Our Services</h2>
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
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <p>Ready to enhance your home entertainment? Get in touch today!</p>
        <Link to="/quote">
          <button className="cta-button">Get a Quote</button>
        </Link>

      </section>

    </div>
  );
}

export default HomePage;
