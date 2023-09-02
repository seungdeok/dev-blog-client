/* eslint-disable no-unused-vars */
import axios from 'axios';
import { getStorageItem } from '@/utils/storage';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${getStorageItem('accessToken')}`,
    'Content-Type': 'application/json',
  },
});

export interface FetchInstance {
  get: <Response = unknown>(url: string) => Promise<Response>;
  post: <Response = unknown>(
    url: string,
    body: { [key: string]: any }
  ) => Promise<Response>;
  patch: <Response = unknown>(
    url: string,
    body: { [key: string]: any }
  ) => Promise<Response>;
  delete: <Response = unknown>(url: string) => Promise<Response>;
}

export const client: FetchInstance = {
  get: async function fetch<Response = unknown>(url: string) {
    const res = await instance.get<Response>(url);
    return res.data;
  },
  post: async function fetch<Response = unknown>(
    url: string,
    body: { [key: string]: any }
  ) {
    const res = await instance.post<Response>(url, body);
    return res.data;
  },
  patch: async function fetch<Response = unknown>(
    url: string,
    body: { [key: string]: any }
  ) {
    const res = await instance.patch<Response>(url, body);
    return res.data;
  },
  delete: async function fetch<Response = unknown>(url: string) {
    const res = await instance.delete<Response>(url);
    return res.data;
  },
};
