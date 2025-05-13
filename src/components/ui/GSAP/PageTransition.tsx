import React, { useEffect } from 'react';
import { gsap } from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  useEffect(() => {
    // Animate page entry
    gsap.from('main', {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, []);

  return (
    <div className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;
