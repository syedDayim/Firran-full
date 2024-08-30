import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../styles/header.css';
import logo from '/assets/01.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index, e) => {
    if (isMobile) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'About', href: '#about', dropdownItems: ['About 1', 'About 2', 'About 3', 'About 4', 'About 5'] },
    { 
      name: 'Firran Collections', 
      href: '#collections', 
      dropdownItems: ['Ladies', 'Gents'] 
    },
    { name: 'Firran Events', href: '#events' },
    { name: 'Firran Designs', href: '#designs' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Link the logo to the homepage */}
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`} ref={dropdownRef}>
        {navItems.map((item, index) => (
          <div key={index} className={`dropdown ${activeDropdown === index ? 'active' : ''}`}>
            {/* Disable the click on the parent item if it has dropdown items */}
            <a 
              href={item.dropdownItems ? '#' : item.href}
              onClick={(e) => item.dropdownItems && toggleDropdown(index, e)}
            >
              {item.name}
              {item.dropdownItems && (
                activeDropdown === index ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />
              )}
            </a>
            {item.dropdownItems && (
              <div className={`dropdown-content ${activeDropdown === index ? 'active' : ''}`}>
                {item.dropdownItems.map((subItem, subIndex) => (
                  subItem === 'Ladies' ? (
                    <Link key={subIndex} to="/collections-ladies">{subItem}</Link>
                  ) : subItem === 'Gents' ? (
                    <Link key={subIndex} to="/collections-gents">{subItem}</Link>
                  ) : (
                    <a key={subIndex} href={`${item.href}-${subIndex + 1}`}>{subItem}</a>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={`navbar-burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Header;
