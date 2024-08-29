import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="https://via.placeholder.com/100x100.png?text=Logo" 
            alt="Logo" 
          />
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <div className="dropdown">
            <a href="#about">About</a>
            <div className="dropdown-content">
              <a href="#about-1">About 1</a>
              <a href="#about-2">About 2</a>
              <a href="#about-3">About 3</a>
              <a href="#about-4">About 4</a>
              <a href="#about-5">About 5</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#collections">Firran Collections</a>
            <div className="dropdown-content">
              <a href="#collection-1">Collection 1</a>
              <a href="#collection-2">Collection 2</a>
            </div>
          </div>
          <a href="#events">Firran Events</a>
          <a href="#designs">Firran Designs</a>
        </div>
        <div className="navbar-burger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default Header;