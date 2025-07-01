import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">My Profile</h2>
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-2xl">
        <div className="space-y-4">
          
          <div className="flex justify-between items-center border-b border-gray-700 pb-3">
            <span className="text-gray-400">Name</span>
            <span className="text-white font-semibold">{user.name}</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-700 pb-3">
            <span className="text-gray-400">Primary Focus</span>
            <span className="text-brand-green-light font-semibold">{user.focusArea}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Subscription Tier</span>
            <span className="text-white font-semibold">Sage Free Tier</span>
          </div>

        </div>
        <button className="mt-8 w-full bg-brand-green-dark text-white font-bold py-3 rounded-lg hover:bg-brand-green-light transition-colors">
          Upgrade to Sage Pro
        </button>
      </div>
    </div>
  );
};

export default Profile;