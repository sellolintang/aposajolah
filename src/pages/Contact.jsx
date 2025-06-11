import React from 'react';
// import './assets/style/style.css';

const Header = () => (
  <header className="header">
    <div className="header-container">
      <div className="header-logo">
        <img src="../assets/img/logo.jpg" alt="Glass House Logo" />
        <span className="logo-text">Glass House</span>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="../history/history.html">History</a></li>
          <li><a href="../gallery/gallery.html">Gallery</a></li>
          <li><a href="./contact.html">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const ContactPage = () => (
  <div>
    <Header />
    <h1>Contact</h1>
  </div>
);

export default ContactPage;
