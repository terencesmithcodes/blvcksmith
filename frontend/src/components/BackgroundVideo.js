import React, { useState, useEffect } from 'react';
import VideoPlaceholder from './VideoPlaceholder';

const BackgroundVideo = ({ videoSrc }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate video loading delay if video src doesn't exist
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Light overlay with further reduced opacity for even more visible video */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/30 via-[#FAFAFA]/20 to-[#FAFAFA]/30 z-10"></div>
      
      {/* Neo-brutalist accents - simpler, bolder shapes with increased contrast */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#FACC15] border-4 border-black rotate-12 opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#EF4444] border-4 border-black -rotate-6 opacity-20"></div>
      </div>
      
      {/* Video Background with increased opacity */}
      <div className="absolute inset-0 opacity-90">
        {/* Fallback background for when video can't load */}
        <div className="absolute inset-0 bg-[#FAFAFA] bg-opacity-100"></div>
        
        {/* Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          onCanPlay={() => setIsLoading(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Loading placeholder */}
      {isLoading && <VideoPlaceholder />}
    </div>
  );
};

export default BackgroundVideo;