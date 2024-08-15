import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const {user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current user:', user);
  }, [user]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleCartDropdown = () => {
    setCartOpen(!cartOpen);
  };
  

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/Products' },
    { label: 'Men', to: '/Men' },
    { label: 'Women', to: '/Women' },
    { label: 'Kids', to: '/Kids' },
    { label: 'Home & Kitchen', to: '/Home & Kitchen' },
    { label: 'Beauty', to: '/Beauty' },
  ];

  const dropdownItems = [
    { label: 'My Profile', to: '/profile' },
    { label: 'Orders', to: '/orders' },
    { label: 'Wishlist', to: '/wishlist' },
    { label: 'Coupons', to: '/coupons' },
    { label: 'Gift Card', to: '/giftcard' },
    { label: 'Logout', onClick: handleLogout },
  ];

  const cartItems = [
    { id: 1, name: 'Product 1', price: '$10.00', quantity: 1 },
    { id: 2, name: 'Product 2', price: '$20.00', quantity: 2 },
  ];

  const renderDropdown = () => (
    <div className={`dropdown ${dropdownOpen ? 'active' : ''}`}>
      {dropdownItems.map((item) => (
        <div key={item.label} className="dropdown-item" onClick={item.onClick}>
          <Link to={item.to} className="dropdown-link">
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );

  const renderCartDropdown = () => (
    <div className={`cart-dropdown ${cartOpen ? 'active' : ''}`}>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>Qty: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <Link to="/cartSummary" className="checkout-btn">View Cart</Link>
      </div>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Navika</Link>
        <div className="nav-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
            <button type="button" className="search-button">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M10,2A8,8,0,1,0,18,10,8,8,0,0,0,10,2Zm0,14A6,6,0,1,1,16,10,6,6,0,0,1,10,16ZM23.71,22.29l-6-6a1,1,0,0,0-1.41,1.41l6,6a1,1,0,0,0,1.41-1.41Z"></path>
              </svg>
            </button>
          </div>

          <div className="cart-icon" data-count={cartItems.length} onClick={toggleCartDropdown}>
            🛒
            {renderCartDropdown()}
          </div>

          <div className="menu-toggle" onClick={handleDrawerToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ff6200" viewBox="0 0 24 24">
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"></path>
            </svg>
          </div>
        </div>

        <div className={`desktop-nav ${mobileOpen ? 'mobile-nav active' : ''}`}>
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className="nav-item">
              {item.label}
            </Link>
          ))}
          {user ? (
            <div className="nav-item profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Profile
              {renderDropdown()}
            </div>
          ) : (
            <Link to="/LoginPage" className="login-btn">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
