import React from 'react';
import { Link } from 'react-router';

const NotFound: React.FC = () => {
  return (
    <div className="layout-text">
      <h1>404 - Bobr kurwa!</h1>
      <p>Page not found.</p>
      <p className="text-secondary"><Link to="/">Go home</Link> to pet your beaver.</p>
    </div>
  );
};

export default NotFound;
