// File: src/Components/Home.js

import logo from '../loglogo.png';
import React, { useState } from 'react';

function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="Home">
      <img src={logo} alt="Logo" className="home-logo" />
      <h2>Shwifty Automotive</h2>
      <h2 className="subheading">Service you can trust</h2>
      <p>Shwifty Auto is your trusted partner for all automotive needs. We offer top-notch services to keep your vehicle running smoothly.</p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="email-form">
          <p>Subscribe to stay up to date!</p>
          <input
            type="email"
            value={email}
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="button">Submit</button>
        </form>
      ) : (
        <p>Thank you for your email, we will update you with more info.</p>
      )}
    </div>
  );
}

export default Home;
