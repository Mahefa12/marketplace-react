import React from 'react';

const CreateBook = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Sell a Book</h2>
        <form className="card p-4 shadow-sm">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Version/Edition</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select" required>
              <option value="">Select Category...</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Engineering">Engineering</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Price (R)</label>
              <input type="number" className="form-control" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Condition</label>
              <select className="form-select" required>
                <option value="New">New</option>
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Images</label>
            <input type="file" className="form-control" multiple />
          </div>
          <button type="submit" className="btn btn-primary">Create Listing</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
