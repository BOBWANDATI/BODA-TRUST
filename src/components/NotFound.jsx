import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              Go Back Home
            </Button>
          </Link>
        </div>
        <div className="not-found-image">
          <span>🏍️</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;