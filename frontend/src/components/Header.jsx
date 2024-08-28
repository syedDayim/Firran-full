import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Using an image from via.placeholder.com */}
        <img
          src="https://via.placeholder.com/100x100.png?text=Logo" 
          alt="Logo" 
          // style={{ width: '100px', height: '100px' }}
        />
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Header;
