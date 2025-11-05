import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedComponent: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: 200, 
        duration: 2,
        repeat: -1,
        yoyo: true
      });
    }
  }, []);

  return (
    <div className="p-4 space-y-4">
      <div 
        ref={boxRef} 
        className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center"
      >
        Animated Box
      </div>
    </div>
  );
};

export default AnimatedComponent;