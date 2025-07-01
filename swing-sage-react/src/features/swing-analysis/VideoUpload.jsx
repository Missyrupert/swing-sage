import React from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';

// This component is now smarter and can display its own video preview.
const VideoUpload = ({ onFileSelect, videoFile, title, slotNumber }) => {
  const fileInputRef = React.useRef(null);

  const handleBoxClick = () => {
    // If a video is already selected, clicking the box does nothing.
    // The user must use the 'Choose Different Video' button which will appear elsewhere.
    if (videoFile) return;
    fileInputRef.current.click();
  };

  return (
    <div 
      onClick={handleBoxClick}
      className={`bg-gray-800 border-2 border-dashed border-gray-600 rounded-xl p-4 text-center flex flex-col items-center justify-center min-h-[18rem] transition-all duration-300 ${!videoFile && 'cursor-pointer hover:border-brand-green-light hover:bg-gray-700'}`}
    >
      {videoFile ? (
        // VIEW 1: Video Preview
        <div className="w-full">
          <video 
            src={URL.createObjectURL(videoFile)} 
            className="rounded-lg w-full shadow-lg" 
            controls 
            muted 
            playsinline 
          />
          <p className="text-gray-400 mt-2 text-sm truncate" title={videoFile.name}>{title}</p>
        </div>
      ) : (
        // VIEW 2: Upload Prompt
        <>
          <ArrowUpTrayIcon className="w-12 h-12 text-gray-500 mb-4" />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400">Click to choose a video</p>
        </>
      )}
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => onFileSelect(e, slotNumber)}
        className="hidden"
        accept="video/*"
      />
    </div>
  );
};

export default VideoUpload;