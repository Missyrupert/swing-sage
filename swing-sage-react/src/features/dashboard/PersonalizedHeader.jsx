import React from 'react';

const PersonalizedHeader = ({ name }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">Welcome back, {name}</h1>
      <p className="text-lg text-gray-400 mt-1">Ready to perfect your swing? Let's get to it.</p>
    </div>
  );
};

export default PersonalizedHeader;