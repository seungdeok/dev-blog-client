/* eslint-disable camelcase */

import { Post } from '@/types/Post';
import { client } from './client';

const create = async (
  category_id: number,
  draft: string,
  tags: string,
  title: string,
  content: string
) => {
  const response: Post = await client.post('post', {
    category_id,
    draft,
    tags,
    title,
    content,
  });

  return response;
};

const update = async (
  id: number,
  category_id: number,
  draft: string,
  tags: string,
  title: string,
  content: string
) => {
  const response: Post = await client.patch(`post/${id}`, {
    category_id,
    draft,
    tags,
    title,
    content,
  });

  return response;
};

const remove = async (id: number) => {
  const response: Post = await client.delete(`post/${id}`);

  return response;
};

const list = async () => {
  const response: Post[] = await client.get('post');

  return response;
};

const show = async (id: number) => {
  const response: Post = await client.get(`post/${id}`);

  return response;
};

export const postAPI = {
  create,
  update,
  remove,
  list,
  show,
};