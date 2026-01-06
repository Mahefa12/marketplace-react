import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="mb-4">My Dashboard</h1>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-primary text-white">My Listings</div>
            <div className="card-body">
              <p>You have 2 active listings.</p>
              <button className="btn btn-sm btn-outline-primary">View All</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-success text-white">My Bids</div>
            <div className="card-body">
              <p>You have 1 active bid.</p>
              <button className="btn btn-sm btn-outline-success">View All</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-warning text-dark">Notifications</div>
            <div className="card-body">
              <p>No new notifications.</p>
              <button className="btn btn-sm btn-outline-dark">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
