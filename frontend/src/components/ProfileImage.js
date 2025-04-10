import React, { useRef, useEffect } from 'react';

function ProfileImage({ size = 256 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = '#4f46e5';
    ctx.fillRect(0, 0, size, size);
    
    // Create a circular mask
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2.2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.clip();
    
    // Fill the circle with a gradient
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#4f46e5');
    gradient.addColorStop(1, '#818cf8');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    
    // Add an abstract representation of a person
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    
    // Head
    ctx.beginPath();
    ctx.arc(size / 2, size / 2.5, size / 6, 0, 2 * Math.PI);
    ctx.fill();
    
    // Body
    ctx.beginPath();
    ctx.moveTo(size / 2, size / 2);
    ctx.lineTo(size / 3, size / 1.2);
    ctx.lineTo(size / 1.5, size / 1.2);
    ctx.closePath();
    ctx.fill();
  }, [size]);

  return (
    <canvas 
      ref={canvasRef} 
      width={size} 
      height={size} 
      style={{ width: size, height: size, borderRadius: '50%' }} 
    />
  );
}

export default ProfileImage;