import React, { useState } from 'react';
import VideoUpload from '../features/swing-analysis/VideoUpload';
import AnalysisResult from '../features/swing-analysis/AnalysisResult';
import { getAIResponse } from '../services/api';

const Analysis = ({ user }) => {
  const [video1, setVideo1] = useState(null);
  const [video2, setVideo2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFileSelect = (event, slotNumber) => {
    const file = event.target.files[0];
    if (!file) return;

    // THE FIX: "Same file" detection logic
    if (slotNumber === 1 && video2 && file.name === video2.name) {
      alert("You've selected the same video twice. Please choose a different video for comparison.");
      event.target.value = ''; // Reset the file input
      return;
    }
    if (slotNumber === 2 && video1 && file.name === video1.name) {
      alert("You've selected the same video twice. Please choose a different video for comparison.");
      event.target.value = ''; // Reset the file input
      return;
    }

    if (slotNumber === 1) setVideo1(file);
    else setVideo2(file);
    event.target.value = ''; // Reset input after selection
  };
  
  const handleAnalyzeClick = async () => {
    if (!video1 || !video2) return;
    setIsLoading(true);
    const result = await getAIResponse(video1, 'swingAnalysis', video2);
    setAnalysisResult(result);
    setIsLoading(false);
  };

  const handleReset = () => {
    setVideo1(null); setVideo2(null); setIsLoading(false); setAnalysisResult(null);
  };

  if (analysisResult) {
    return <AnalysisResult analysisData={analysisResult} onReset={handleReset} />;
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-96">
        <svg className="animate-spin h-10 w-10 text-brand-green-light mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        <p className="text-xl text-gray-300">Comparing your swings...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Swing Comparison</h2>
        <span className="bg-brand-green-dark text-brand-green-light font-bold text-sm py-1 px-3 rounded-full">SAGE PRO</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VideoUpload onFileSelect={handleFileSelect} videoFile={video1} title={video1 ? `✔️ Swing 1` : "Upload First Swing"} slotNumber={1} />
        <VideoUpload onFileSelect={handleFileSelect} videoFile={video2} title={video2 ? `✔️ Swing 2` : "Upload Second Swing"} slotNumber={2} />
      </div>

      {video1 && video2 && (
        <div className="text-center mt-8">
          <button onClick={handleAnalyzeClick} className="bg-brand-green-dark text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-green-light text-lg transform hover:scale-105 transition-all animate-fade-in-up">
            Compare & Analyze Swings
          </button>
        </div>
      )}
    </div>
  );
};

export default Analysis;