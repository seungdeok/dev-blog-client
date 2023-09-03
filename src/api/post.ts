/* eslint-disable camelcase */

import { Post } from '@/types/Post';
import { client } from './client';

const create = async (
  draft: string,
  tags: string[],
  title: string,
  content: string
) => {
  const response: Post = await client.post('post', {
    draft,
    tags,
    title,
    content,
  });

  return response;
};

const update = async (
  id: number,
  draft: string,
  tags: string[],
  title: string,
  content: string
) => {
  const response: Post = await client.patch(`post/${id}`, {
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

const list = async (page = 1, tagName = '') => {
  let url = `post?page=${page}`;
  if (tagName) url += `&tagName=${tagName}`;
  const response: {
    data: Post[];
    page: number;
    total: number;
  } = await client.get(url);

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
