import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <main role="main" className="pb-3">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
