import React from 'react';

const VideoPlaceholder = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-5 pointer-events-none">
      <div className="text-center">
        <div className="inline-block p-5 bg-[#E4E4E7] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#000000] animate-pulse">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-[#000000] text-lg font-bold font-['Orbitron']">Loading background video...</p>
      </div>
    </div>
  );
};

export default VideoPlaceholder;