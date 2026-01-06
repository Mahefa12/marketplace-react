import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  // Simulate authentication state
  const isAuthenticated = false; // Toggle this to see different nav items

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom mb-3" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
        <div className="container-fluid">
          <Link className="navbar-brand navbar-brand-custom" to="/">UniMarket</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav flex-grow-1">
              {/* Left side spacer */}
            </ul>
            <ul className="navbar-nav align-items-center gap-3">
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">My Dashboard</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/books">Buy</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/create-book">Sell</NavLink>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link text-dark">Hello, User!</span>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link text-dark" onClick={() => console.log('Logout')}>Log out</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/books">Buy</NavLink>
                  </li>
                  <li className="nav-item">
                     {/* Even if not logged in, usually leads to login then create */}
                    <NavLink className="nav-link" to="/create-book">Sell</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/register">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="btn btn-pill-black" to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
