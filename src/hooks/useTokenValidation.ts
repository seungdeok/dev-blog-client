import { useEffect, useState } from 'react';

export function useTokenValidation() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleVerfiedToken = () => {
    setLoading(false);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    handleVerfiedToken();
  }, []);

  return {
    loading,
    isLoggedIn,
  };
}
