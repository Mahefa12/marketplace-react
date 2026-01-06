import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const dummyBooks = [
  { id: 1, title: 'Calculus: Early Transcendentals', author: 'James Stewart', version: '8th Edition', price: 450, condition: 'Good' },
  { id: 2, title: 'Introduction to Algorithms', author: 'Cormen, Leiserson, Rivest, Stein', version: '3rd Edition', price: 600, condition: 'Like New' },
  { id: 3, title: 'Clean Code', author: 'Robert C. Martin', version: '', price: 300, condition: 'Used' },
  { id: 4, title: 'Design Patterns', author: 'Erich Gamma et al.', version: '', price: 350, condition: 'Good' },
  { id: 5, title: 'Operating System Concepts', author: 'Silberschatz', version: '10th Edition', price: 500, condition: 'Like New' },
  { id: 6, title: 'Computer Networks', author: 'Tanenbaum', version: '5th Edition', price: 400, condition: 'Fair' },
];

const Books = () => {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('newest');
  const [category, setCategory] = useState('');

  const filteredBooks = dummyBooks.filter(b => 
    b.title.toLowerCase().includes(query.toLowerCase()) || 
    b.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">Books Marketplace</h1>
        <Link className="btn btn-primary" to="/create-book">Sell a Book</Link>
      </div>

      <form className="row g-3 mb-3" onSubmit={(e) => e.preventDefault()}>
        <div className="col-md-6">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search by title or author" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
          />
        </div>
        <div className="col-md-3">
          <select className="form-select" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div className="col-12">
          <button className="btn btn-outline-secondary" type="submit">Apply</button>
        </div>
      </form>

      <form className="row g-2 mb-3">
        <div className="col-md-3">
          <input className="form-control" placeholder="Your name" />
        </div>
        <div className="col-md-3">
          <input className="form-control" placeholder="Your email" />
        </div>
        <div className="col-md-3">
          <input className="form-control" placeholder="Your phone" />
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
        <div className="col-md-3">
          <button className="btn btn-outline-primary w-100" type="button">Save This Search</button>
        </div>
        <div>
          <p className="small text-muted">NB: Should the book currently be unavailable, please provide the following information. You will receive a notification once the book is accessible.</p>
        </div>
      </form>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredBooks.map(b => (
          <div className="col" key={b.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{b.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">by {b.author} {b.version ? `- ${b.version}` : ''}</h6>
                <p className="card-text"><strong>Price:</strong> R {b.price.toFixed(2)}</p>
                <p className="card-text"><strong>Condition:</strong> {b.condition}</p>
              </div>
              <div className="card-footer bg-white border-0 d-flex gap-2">
                <button className="btn btn-sm btn-outline-primary">Details</button>
                <button className="btn btn-sm btn-primary">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="mt-3">
        <ul className="pagination">
          <li className="page-item active">
            <button className="page-link">1</button>
          </li>
          <li className="page-item">
            <button className="page-link">2</button>
          </li>
          <li className="page-item">
            <button className="page-link">3</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Books;
