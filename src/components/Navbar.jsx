import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="logo-icon"></span>
          <span className="logo-text">BodaTrust</span>
        </Link>

        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/ride-request" className="navbar-link">Book Ride</Link>
          <Link to="/emergency-help" className="navbar-link">Emergency</Link>
          <Link to="/referrals" className="navbar-link">Referrals</Link>
          <Link to="/chat" className="navbar-link">Chat</Link>
        </div>

        <div className="navbar-actions">
          <Link to="/login">
            <Button variant="outline" size="sm">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="primary" size="sm">Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;