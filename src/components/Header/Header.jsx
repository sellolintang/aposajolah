import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import "./Header.css";
import "./script.js";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a className="header-logo">
          <img src={logo} alt="Glass House Logo" />
          Glass House
        </a>

        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="header-nav">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Gallery">Gallery</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            {/* <li><a href="./index.html">Home</a></li>
            <li><a href="./history/history.html">About</a></li>
            <li><a href="./gallery/gallery.html">Gallery</a></li>
            <li><a href="./contact/contact.html">Contact Us</a></li> */}
          </ul>
        </nav>
      </div>
      <script src="./script.js"></script>
    </header>
  );
};

export default Header;