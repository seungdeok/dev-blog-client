import { setStorageItem } from '@/utils/storage';
import { client } from './client';
import { AuthToken } from '@/types/AuthToken';

const login = async (email: string, password: string) => {
  const response: AuthToken = await client.post('auth/login', {
    email,
    password,
  });

  setStorageItem('accessToken', response.accessToken);
  setStorageItem('refreshToken', response.refreshToken);

  return response;
};

export const authAPI = {
  login,
};
