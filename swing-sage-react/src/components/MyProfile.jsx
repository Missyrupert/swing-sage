import React from 'react';

const MyProfile = ({ userName }) => {
  return (
    <div className="card fade-in" style={{ padding: '2rem' }}>
      <h2 style={{ color: 'var(--accent-color)' }}>Welcome, {userName}!</h2>
      <p>This is your personalised Swing Sage profile page.</p>
      <p>More features coming soon...</p>
    </div>
  );
};

export default MyProfile;
