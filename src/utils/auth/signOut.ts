import { removeStorageItem } from '../storage';

export function signOut() {
  removeStorageItem('accessToken');
  removeStorageItem('refreshToken');
}
