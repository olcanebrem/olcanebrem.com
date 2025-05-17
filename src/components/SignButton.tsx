import React, { useEffect, useState } from 'react';

export default function SignButton() {
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    // Hem localStorage hem sessionStorage kontrolü
    const session = localStorage.getItem('session') || sessionStorage.getItem('session');
    setHasSession(!!session);
  }, []);

  return (
    <a
      href="/login"
      className="transition px-5 py-2 rounded-full font-semibold bg-secondary-container text-on-secondary-container hover:bg-primary-container hover:text-on-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 elevation-1 mx-2 duration-200"
      style={{ minWidth: 120, textAlign: 'center' }}
    >
      {hasSession ? 'Sign Up' : 'Sign In'}
    </a>
  );
}
