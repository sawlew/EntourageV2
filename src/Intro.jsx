import React, { useState } from 'react';
import './index.css';
import Logo from './assets/logo.png';

const Intro = ({ onLinkClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleLinkClick = () => {
    setIsVisible(false);

    // Delay for the fade-out effect, then trigger onLinkClick to show App
    setTimeout(() => {
      onLinkClick();
    }, 500); // Matches CSS transition duration for smoothness
  };

  return (
    <div className={`intro-container ${!isVisible ? 'fade-out' : ''}`}>
      <div className='intro-overlay'>
        <div className='intro-logo-container'>
          <img className='intro-logo' src={Logo} alt="Company Logo" />
        </div>
        <div className='intro-links'>
          <a href="#experience" onClick={handleLinkClick}>Book a Free Riding Experience</a>
          <a href="#rent" onClick={handleLinkClick}>Rent your Car for Exquisite Earning</a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
