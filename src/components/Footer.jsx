import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-top footer text-muted mt-auto py-3">
      <div className="container">
        &copy; 2025 - UniMarket - <Link to="/privacy">Privacy</Link>
      </div>
    </footer>
  );
};

export default Footer;
