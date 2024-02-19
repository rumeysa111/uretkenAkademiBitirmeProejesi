// components/Footer.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#008080',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // İçeriği sola ve sağa doğru genişlet
    alignItems: 'center', // İçeriği dikey ortala
  };

  const iconStyle = {
    fontSize: '1.5rem',
    marginLeft: '0.5rem', // Sosyal medya ikonları arasına boşluk bırak
  };

  return (
    <footer style={footerStyle}>
      <div className="container" style={containerStyle}>
        <p>
          &copy; 2024 Rumeysa Semiz. All Rights Reserved.
        </p>
        <div>
          <span style={iconStyle}>
          
            <a href='https://twitter.com/MeramBelediyesi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
            <FontAwesomeIcon icon={faTwitter} />
            </a>
          </span>
          <span style={iconStyle}>
            <a href="https://www.instagram.com/meram.belediyesi/">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
