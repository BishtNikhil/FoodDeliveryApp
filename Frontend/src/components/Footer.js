import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  const handleClick = (platform) => {
    // You can add functionality here to handle clicks on social media icons
    console.log(`Clicked on ${platform}`);
  };

  return (
    <footer className="footer">
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebookF} className="icon" onClick={() => handleClick('Facebook')} />
        <FontAwesomeIcon icon={faTwitter} className="icon" onClick={() => handleClick('Twitter')} />
        <FontAwesomeIcon icon={faInstagram} className="icon" onClick={() => handleClick('Instagram')} />
      </div>
      <p>© 2024 Aji no Tankyūsha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
