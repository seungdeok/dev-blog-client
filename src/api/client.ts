import { getStorageItem } from '@/utils/storage';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

interface FetchOption {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  headers: { [key: string]: string };
  body?: string;
}

async function fetchAPI(
  url: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  body?: { [key: string]: any }
) {
  const options: FetchOption = {
    method,
    headers: {
      Authorization: `Bearer ${getStorageItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
  };

  if (method === 'POST' || method === 'PATCH') {
    options.body = JSON.stringify(body!);
  }

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const contentType = res.headers.get('content-type');
  const jsonParseAvailable = contentType && /json/.test(contentType);

  const data = jsonParseAvailable ? await res.json() : await res.text();

  return data;
}

export const client = {
  get: (url: string) => fetchAPI(`${baseURL}/${url}`, 'GET'),
  post: (url: string, body: { [key: string]: any }) =>
    fetchAPI(`${baseURL}/${url}`, 'POST', body),
  patch: (url: string, body: { [key: string]: any }) =>
    fetchAPI(`${baseURL}/${url}`, 'PATCH', body),
  delete: (url: string) => fetchAPI(`${baseURL}/${url}`, 'DELETE'),
};
