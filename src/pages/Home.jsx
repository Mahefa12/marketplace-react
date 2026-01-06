import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="hero-landing">
        <div className="hero-card">
          <div className="text-center">
            <h1 className="hero-title">The Student Marketplace</h1>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <Link className="cta-button-buying" to="/books">I'm Buying</Link>
              <Link className="cta-button-selling" to="/create-book">I'm Selling</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="landing-heading">What is UniMarket?</h2>
              <p className="landing-lead">A simple, safe place for students to buy and sell textbooks and study materials. Browse listings, place bids or purchase requests, and manage your activity from your dashboard.</p>
            </div>
          </div>

          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="feature-card">
                <h5>Browse and Filter</h5>
                <p>Search by title, author, category, price and condition. Save searches and get notified.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <h5>Sell in Minutes</h5>
                <p>Create a listing with images, price and condition. Manage status and edit any time.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <h5>Secure Accounts</h5>
                <p>Login with your account, track bids, purchases and notifications in one place.</p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <div className="how-card">
                <h5>How Buying Works</h5>
                <ul className="step-list">
                  <li>Browse books and open details</li>
                  <li>Submit a purchase request or place a bid</li>
                  <li>Track status in your dashboard</li>
                  <li>Follow payment instructions when accepted</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="how-card">
                <h5>How Selling Works</h5>
                <ul className="step-list">
                  <li>Create a listing with photos and details</li>
                  <li>Receive bids and purchase requests</li>
                  <li>Update status to Pending, Active or Sold</li>
                  <li>Communicate and complete the sale</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-lg-8 mx-auto">
              <div className="get-started">
                <h5>Get Started</h5>
                <div className="d-flex flex-column flex-md-row gap-3">
                  <div className="gs-step">
                    <div className="gs-number">1</div>
                    <div>
                      <div className="gs-title">Create your account</div>
                      <div className="gs-text">Register or log in to access your dashboard.</div>
                    </div>
                  </div>
                  <div className="gs-step">
                    <div className="gs-number">2</div>
                    <div>
                      <div className="gs-title">Browse listings</div>
                      <div className="gs-text">Use filters and categories to find the right book.</div>
                    </div>
                  </div>
                  <div className="gs-step">
                    <div className="gs-number">3</div>
                    <div>
                      <div className="gs-title">Sell a book</div>
                      <div className="gs-text">Create a listing in minutes and start receiving offers.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
