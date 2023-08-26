import { Category } from '@/types/Category';
import { client } from './client';

const create = async (name: string) => {
  const response: Category = await client.post('category', {
    name,
  });

  return response;
};

const update = async (id: number, name: string) => {
  const response: Category = await client.patch(`category/${id}`, {
    name,
  });

  return response;
};

const remove = async (id: number) => {
  const response: Category = await client.delete(`category/${id}`);

  return response;
};

const list = async () => {
  const response: Category[] = await client.get('category');

  return response;
};

export const categoryAPI = {
  create,
  update,
  remove,
  list,
};
