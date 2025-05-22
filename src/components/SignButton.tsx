import React, { useEffect, useState } from 'react';

export default function SignButton() {
  const [hasSession, setHasSession] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check both localStorage and sessionStorage
    const session = localStorage.getItem('session') || sessionStorage.getItem('session');
    setHasSession(!!session);
  }, []);

  // Don't render anything on the server
  if (!isClient) {
    return null;
  }

  return (
    <>
      <a
        href="/login"
        className="sign-button relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container hover:bg-primary-container hover:text-on-primary-container transition-all duration-500 ease-emphasized transform hover:scale-125 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 elevation-2 mx-2 overflow-hidden group"
        style={{
          marginTop: '-1rem', // Header'dan taşması için
          boxShadow: 'var(--md-sys-elevation-level2)',
        }}
      >
        {/* Dashed Circle Animation */}
        <svg className="dashed-circle absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="dashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--md-sys-color-primary)" />
              <stop offset="50%" stopColor="var(--md-sys-color-secondary)" />
              <stop offset="100%" stopColor="var(--md-sys-color-tertiary)" />
            </linearGradient>
          </defs>
          
          {/* Main Dashed Circle */}
          <circle
            className="circle"
            cx="50"
            cy="50"
            r="40"
            stroke="url(#dashGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="15 10 15 10"
          />

          {/* Secondary Dashed Circle (opposite direction) */}
          <circle
            className="circle-reverse"
            cx="50"
            cy="50"
            r="35"
            stroke="url(#dashGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="10 15 10 15"
          />
        </svg>

        {/* SVG Background Shapes */}
        <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--md-sys-color-primary)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--md-sys-color-secondary)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Morphing Shapes */}
          <path
            className="shape-1"
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="url(#shapeGradient)"
            style={{
              transition: 'd 0.5s ease-emphasized',
            }}
          />
          <path
            className="shape-2"
            d="M20,20 L80,20 L80,80 L20,80 Z"
            fill="url(#shapeGradient)"
            style={{
              transition: 'd 0.5s ease-emphasized',
            }}
          />
        </svg>

        <span className="relative z-10 flex items-center justify-center">
          <span className="material-symbols-rounded text-2xl mr-2 transition-transform duration-500 group-hover:scale-110">login</span>
          <span className="font-medium whitespace-nowrap transition-transform duration-500 group-hover:scale-105">{hasSession ? 'Sign Up' : 'Sign In'}</span>
        </span>
      </a>

      <style>
        {`
          .sign-button {
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .sign-button:hover {
            animation: none;
          }

          /* Dashed Circle Animation */
          @keyframes dash {
            0% {
              stroke-dashoffset: 0;
              transform: rotate(0deg);
            }
            100% {
              stroke-dashoffset: -60;
              transform: rotate(360deg);
            }
          }

          @keyframes dashReverse {
            0% {
              stroke-dashoffset: 0;
              transform: rotate(360deg);
            }
            100% {
              stroke-dashoffset: 60;
              transform: rotate(0deg);
            }
          }

          .circle {
            animation: dash 2s linear infinite;
            transform-origin: 50% 50%;
          }

          .circle-reverse {
            animation: dashReverse 3s linear infinite;
            transform-origin: 50% 50%;
          }

          /* MD3 Motion Principles */
          .sign-button {
            transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
          }

          .sign-button:hover {
            transition-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
          }

          /* SVG Shape Morphing */
          .shape-1 {
            d: path('M0,0 L100,0 L100,100 L0,100 Z');
          }

          .shape-2 {
            d: path('M20,20 L80,20 L80,80 L20,80 Z');
          }

          .group:hover .shape-1 {
            d: path('M10,10 C40,10 60,10 90,10 C90,40 90,60 90,90 C60,90 40,90 10,90 C10,60 10,40 10,10 Z');
          }

          .group:hover .shape-2 {
            d: path('M30,30 C50,20 70,20 90,30 C90,50 90,70 70,90 C50,90 30,90 10,70 C10,50 20,40 30,30 Z');
          }

          /* Gradient Border */
          .sign-button::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(45deg, var(--md-sys-color-primary), var(--md-sys-color-secondary));
            border-radius: inherit;
            opacity: 0;
            transition: opacity 0.5s cubic-bezier(0.2, 0, 0.38, 0.9);
            z-index: -1;
          }

          .sign-button:hover::before {
            opacity: 0.2;
          }

          .sign-button::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 2px;
            background: linear-gradient(45deg, var(--md-sys-color-primary), var(--md-sys-color-secondary));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.5s cubic-bezier(0.2, 0, 0.38, 0.9);
          }

          .sign-button:hover::after {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
}
