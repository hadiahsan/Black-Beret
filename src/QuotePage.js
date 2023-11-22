import React from 'react';
import './Stylings/QuotePage.css';

function QuotePage() {
  return (
    <div className="quote-container">
      <h1>Get a Competitive Quote</h1>
      <form action="https://formspree.io/f/xnqkykdk" method="POST">
        <label>
          Job:
          <select name="Job" className="job-dropdown" defaultValue="">
            <option value="" disabled selected style={{ color: 'gray' }}>Select a job</option>
            <option value="sound-bar-installation">Sound Bar Installation</option>
            <option value="security-camera-installation">Security Camera Installation</option>
            <option value="accent-wall">Accent Wall</option>
            <option value="basement-framing">Basement Framing</option>
            <option value="barn-wood-wall">Barn Wood Wall</option>
            <option value="gazebo-installation">Gazebo Installation</option>
            <option value="kitchen-appliances-installation">Kitchen Appliances Installation</option>
            <option value="home-theater-setup">Sound Bars / Home Theater Setup</option>
            <option value="motorized-tv-mount-installation">Motorized TV Mount Installation</option>
            <option value="zebra-blinds-installation">Zebra Blinds Installation</option>
            <option value="pot-lights-replacement">Ultra Slim Pot Lights Replacement</option>
            <option value="fire-place-installation">Fire Place Installation</option>
            <option value="garage-door-installation">Garage Door Machines Installation</option>
            <option value="chandeliers">Chandeliers</option>
            <option value="event-backdrops">Event Back Drops</option>
            <option value="backyard-fence-door-locks">Back Yard Fence Door Locks</option>
            <option value="garage-racks">Garage Racks All Types</option>
          </select>
        </label>
        <label>
          Hardware Required:
          <select name="Hardware" className="job-dropdown" defaultValue="">
            <option value="" disabled selected style={{ color: 'gray' }}>Select the hardware</option>
            <option value="tv-mount">TV Mount</option>
            <option value="pot-lights">Pot Lights</option>
            <option value="garage-door-opener">Garage Door Opener</option>
            <option value="accent-wall">Accent Wall Panels</option>
            <option value="barn-wood-panels">Barn Wood Panels</option>
          </select>
        </label>
        <label>
          Address:
          <input type="text" className="text-box" name="Address"  />
        </label>
        <label>
          Availability:
          <input type="text" className="text-box" name="Availability" />
        </label>
        <label>
          Additional Information:
          <textarea name="Additional Info" className="text-box"></textarea>
        </label>
        <button type="submit">Get My Quote</button>
      </form>
    </div>
  );
}

export default QuotePage;
