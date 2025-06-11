import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.jpg';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.style.overflow = !menuActive ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuActive(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuActive) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuActive]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <NavLink to="/" className="header-logo">
            <img src={logo} alt="Glass House Logo" />
            Glass House
          </NavLink>

          <div
            className={`hamburger ${menuActive ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`header-nav ${menuActive ? 'active' : ''}`}>
            <ul>
              <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
              <li><NavLink to="/About" onClick={closeMenu}>About</NavLink></li>
              <li><NavLink to="/Gallery" onClick={closeMenu}>Gallery</NavLink></li>
              <li><NavLink to="/Contact" onClick={closeMenu}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Overlay dikelola oleh React, bukan JS DOM */}
      <div
        className={`mobile-nav-overlay ${menuActive ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Header;
