import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-card">
      <h2 className="auth-heading">Login</h2>
      <form>
        <input type="email" className="auth-input" placeholder="Email" required />
        <input type="password" className="auth-input" placeholder="Password" required />
        <button type="submit" className="auth-button">Sign In</button>
      </form>
      <div className="auth-link">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
