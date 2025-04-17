import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FadeTransition = ({ children }) => {
  const [opacity, setOpacity] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setOpacity(0);
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      style={{
        opacity,
        transition: 'opacity 300ms ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeTransition;