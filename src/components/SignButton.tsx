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
      className="transition px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:from-pink-500 hover:to-indigo-500 shadow-md mx-2"
      style={{ minWidth: 90, textAlign: 'center' }}
    >
      {hasSession ? 'Sign Up' : 'Sign In'}
    </a>
  );
}
