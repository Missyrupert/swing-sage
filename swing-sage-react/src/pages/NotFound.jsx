import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-6xl font-bold text-brand-green-light">404</h1>
      <p className="text-2xl mt-4 text-white">Page Not Found</p>
      <p className="mt-2 text-gray-400">The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="mt-8 inline-block bg-brand-green-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-light transition-colors"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;