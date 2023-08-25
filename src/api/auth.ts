import { setStorageItem } from '@/utils/storage';
import { client } from './client';
import { AuthToken } from '@/types/AuthToken';
import { User } from '@/types/User';

const login = async (email: string, password: string) => {
  const response: AuthToken = await client.post('auth/login', {
    email,
    password,
  });

  setStorageItem('accessToken', response.accessToken);
  setStorageItem('refreshToken', response.refreshToken);

  return response;
};

const verifyToken = async () => {
  const response: User = await client.post('auth/verifyToken', {});

  return response !== null;
};

export const authAPI = {
  login,
  verifyToken,
};
