import React from 'react';
import AIChat from '../features/dashboard/AIChat';
import PersonalizedHeader from '../features/dashboard/PersonalizedHeader';
import FocusForToday from '../features/dashboard/FocusForToday';

// The Dashboard now receives the 'user' object as a prop
const Dashboard = ({ user }) => {
  return (
    <div className="space-y-12">
      <PersonalizedHeader name={user.name} />
      <FocusForToday focusArea={user.focusArea} />
      <AIChat />
    </div>
  );
};

export default Dashboard;