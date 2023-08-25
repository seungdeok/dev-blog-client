import { authAPI } from '@/api/auth';
import { useEffect, useState } from 'react';

export function useTokenValidation() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleVerfiedToken = async () => {
    try {
      const response = await authAPI.verifyToken();
      setIsLoggedIn(response);
    } catch (err) {
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleVerfiedToken();
  }, []);

  return {
    loading,
    isLoggedIn,
  };
}
