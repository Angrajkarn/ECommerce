
import React from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <img src="/path-to-your-logo/logo.png" alt="Brand Logo" className="header-logo" />
        <h1 className="header-title">Navika</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
