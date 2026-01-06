import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth-card">
      <h2 className="auth-heading">Register</h2>
      <form>
        <input type="text" className="auth-input" placeholder="Full Name" required />
        <input type="email" className="auth-input" placeholder="Email" required />
        <input type="password" className="auth-input" placeholder="Password" required />
        <input type="password" className="auth-input" placeholder="Confirm Password" required />
        <button type="submit" className="auth-button">Create Account</button>
      </form>
      <div className="auth-link">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
