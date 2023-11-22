import React from 'react';
import './Stylings/QuotePage.css';

function QuotePage() {
  return (
    <div className="quote-container">
      <h1>Get a Competitive Quote</h1>
      <form action="https://formspree.io/f/xnqkykdk" method="POST">
        <label>
          TV Size:
          <input type="text" name="TV Size" />
        </label>
        <label>
          Do you have a mount?
          <input type="text" name="Mount Needed" />
        </label>
        <label>
          Address:
          <input type="text" name="Address" />
        </label>
        <label>
          Availability:
          <input type="text" name="Availability" />
        </label>
        <label>
          Additional Information:
          <textarea name="Additional Info"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuotePage;
