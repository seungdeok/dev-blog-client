import authHandlers from './api/auth';
import tagHandlers from './api/tag';
import postHandlers from './api/post';

export const handlers = [
  // auth
  ...authHandlers,
  // tag
  ...tagHandlers,
  // post
  ...postHandlers,
];
