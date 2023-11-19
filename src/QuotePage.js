import React from 'react';
import './Stylings/QuotePage.css';

function QuotePage() {
  return (
    <div className="quote-container">
      <h1>Get a Competitive Quote</h1>
      <form action="https://formspree.io/f/mnqkylwq" method="POST">
        <label>
          TV Size:
          <input type="text" name="tvSize" />
        </label>
        <label>
          Do you have a mount?
          <input type="text" name="mountNeeded" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <label>
          Availability:
          <input type="text" name="availability" />
        </label>
        <label>
          Additional Information:
          <textarea name="additionalInfo"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuotePage;
