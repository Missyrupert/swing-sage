import React from 'react';
import { topTips } from '../../services/data';

const TipCards = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Today's Top Drills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topTips.map((tip, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-bold text-lg mb-2 text-brand-green-light">{tip.title}</h3>
            <p className="text-gray-400">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipCards;