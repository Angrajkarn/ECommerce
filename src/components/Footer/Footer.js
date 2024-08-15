import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are Link company dedicated to providing the best products and services to our customers. Our goal is to make shopping Link seamless and enjoyable experience.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i>234,18th c main road ,Janana ganga nagar,Bengaluru,560056</li>
            <li><i className="fas fa-phone-alt"></i> +91 703329338</li>
            <li><i className="fas fa-envelope"></i> info@Navika.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Navika. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
