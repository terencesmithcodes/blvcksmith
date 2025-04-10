import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/95 via-[#121212]/90 to-[#121212]/95 z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-5">
        {/* Main gradients */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-[#E74C3C]/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-radial from-[#38A3A5]/15 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles - ember red */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-[#E74C3C]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-16 h-16 bg-[#E74C3C]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-[#E74C3C]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles - teal */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#38A3A5]/10 rounded-full blur-xl animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-[#38A3A5]/10 rounded-full blur-xl animate-float-delay" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <rect id="grid-square" x="0" y="0" width="40" height="40" fill="none" stroke="#E74C3C" strokeWidth="0.5" strokeOpacity="0.3"></rect>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)"></rect>
          </svg>
        </div>
        
        {/* Moving light beam */}
        <div className="absolute -top-20 -left-20 w-40 h-[200%] bg-gradient-to-b from-transparent via-[#F5F5F5]/5 to-transparent rotate-45 transform animate-beam"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;