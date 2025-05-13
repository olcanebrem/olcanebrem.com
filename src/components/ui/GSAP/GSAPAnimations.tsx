import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GSAPAnimations: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const animations: (() => void)[] = [];

    // Box Animation
    if (boxRef.current) {
      const boxAnimation = () => {
        gsap.from(boxRef.current!, {
          duration: 1,
          opacity: 0,
          y: 50,
          rotation: 180,
          ease: 'power3.out',
        });
      };
      animations.push(boxAnimation);
    }

    // Circle Animation
    if (circleRef.current) {
      const circleAnimation = () => {
        gsap.to(circleRef.current!, {
          duration: 2,
          x: 250,
          backgroundColor: '#ff0000',
          borderRadius: '50%',
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      };
      animations.push(circleAnimation);
    }

    // Text Animation
    if (textRef.current) {
      const textAnimation = () => {
        gsap.from(textRef.current!, {
          duration: 1.5,
          opacity: 0,
          scale: 0.5,
          transformOrigin: 'center center',
          ease: 'elastic.out(1, 0.3)',
        });
      };
      animations.push(textAnimation);
    }

    // Run all animations
    animations.forEach(animate => animate());
  }, []);

  return (
    <div className="space-y-4">
      <div 
        ref={boxRef} 
        className="w-48 h-48 bg-blue-500 flex items-center justify-center text-white font-bold"
      >
        Animated Box
      </div>

      <div 
        ref={circleRef} 
        className="w-24 h-24 bg-green-500 flex items-center justify-center text-white font-bold"
      >
        Moving Circle
      </div>

      <h2 
        ref={textRef} 
        className="text-2xl font-bold text-purple-600"
      >
        GSAP Text Animation
      </h2>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Animation Techniques Demonstrated:</h3>
        <ul className="list-disc list-inside">
          <li>From Animation</li>
          <li>To Animation</li>
          <li>Repeat and Yoyo</li>
          <li>Easing Functions</li>
          <li>Transformations</li>
        </ul>
      </div>
    </div>
  );
};

export default GSAPAnimations;