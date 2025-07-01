import React from 'react';
import { drills } from '../../services/data';
import { LightBulbIcon } from '@heroicons/react/24/solid';

const FocusForToday = ({ focusArea }) => {
  // INTELLIGENT SELECTION: Find a drill that matches the user's focus area.
  const recommendedDrill = drills.find(drill => drill.category === focusArea);

  if (!recommendedDrill) {
    return null; // Don't show the component if no relevant drill is found
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Your Focus for Today: {focusArea}</h2>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-brand-green-dark">
        <div className="flex items-center mb-3">
          <LightBulbIcon className="w-6 h-6 text-brand-green-light mr-3" />
          <h3 className="font-bold text-xl text-brand-green-light">{recommendedDrill.title}</h3>
        </div>
        <p className="text-gray-300 ml-9">{recommendedDrill.description}</p>
      </div>
    </div>
  );
};

export default FocusForToday;