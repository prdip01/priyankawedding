import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouch = () => {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is hovering an interactive element
      const target = e.target;
      const isInteractive = target.closest('a, button, input, select, textarea, [role="button"], .interactive-hover');
      setIsHovered(!!isInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 bg-[#00f3ff] rounded-full shadow-[0_0_10px_#00f3ff]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isClicking ? 0.5 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Fluid Glowing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[#00f3ff]/50 bg-[#00f3ff]/10 backdrop-blur-[1px]"
        animate={{
          x: position.x - (isHovered ? 24 : 16),
          y: position.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderColor: isHovered ? '#ff007f' : '#00f3ff',
          backgroundColor: isHovered ? 'rgba(255, 0, 127, 0.15)' : 'rgba(0, 243, 255, 0.08)',
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.2 }}
      />
    </>
  );
}
