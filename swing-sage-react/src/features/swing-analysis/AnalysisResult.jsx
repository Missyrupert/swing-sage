import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const AnalysisResult = ({ analysisData, onReset }) => {
  if (!analysisData) return null;

  const { score, summary, pros, cons } = analysisData;

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in-up">
      <h3 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-4">
        Analysis Report
      </h3>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Score */}
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg font-semibold text-gray-300 mb-2">Overall Score</h4>
          <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gray-700 border-4 border-brand-green-dark">
            <span className="text-5xl font-bold text-brand-green-light">{score}</span>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-300 mb-2">Sage's Summary</h4>
          <p className="mb-6 text-gray-400 italic">{summary}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-3">What Went Well</h4>
              <ul className="space-y-2">
                {pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-3">Areas for Improvement</h4>
              <ul className="space-y-2">
                {cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <XCircleIcon className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="mt-8 bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-500 transition-colors"
      >
        Analyze Another Swing
      </button>
    </div>
  );
};

export default AnalysisResult;