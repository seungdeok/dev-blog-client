export function setStorageItem(key: string, value: string) {
  return sessionStorage.setItem(key, value);
}

export function getStorageItem(key: string) {
  return sessionStorage.getItem(key);
}

export function removeStorageItem(key: string) {
  return sessionStorage.removeItem(key);
}
