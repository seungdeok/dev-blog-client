import { Tag } from '@/types/Tag';
import { client } from './client';

const create = async (name: string) => {
  const response: Tag = await client.post('tag', {
    name,
  });

  return response;
};

const update = async (id: number, name: string) => {
  const response: Tag = await client.patch(`tag/${id}`, {
    name,
  });

  return response;
};

const remove = async (id: number) => {
  const response: Tag = await client.delete(`tag/${id}`);

  return response;
};

const list = async () => {
  const response: Tag[] = await client.get('tag');

  return response;
};

export const tagAPI = {
  create,
  update,
  remove,
  list,
};
