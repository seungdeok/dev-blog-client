import { AuthToken } from '@/types/AuthToken';
import { Category } from '@/types/Category';
import { User } from '@/types/User';
import { rest } from 'msw';

export const handlers = [
  // auth
  rest.post('/auth/login', (_req, res, ctx) => {
    return res(
      ctx.json<AuthToken>({
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      })
    );
  }),
  rest.post('/auth/verifyToken', (_req, res, ctx) => {
    return res(
      ctx.json<User>({
        sub: 'abcdef-cccc-bbbb-aaaa-abcdefghilmn',
        scope: 'aws.cognito.signin.user.admin',
      })
    );
  }),
  // category
  rest.post('/category', (_req, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.get('/category', (_req, res, ctx) => {
    return res(
      ctx.json<Category[]>([
        {
          id: 1,
          name: 'dev',
        },
        {
          id: 2,
          name: 'frontend',
        },
        {
          id: 3,
          name: 'backend',
        },
      ])
    );
  }),
  rest.get('/category/1', (_req, res, ctx) => {
    return res(
      ctx.json<Category>({
        id: 1,
        name: 'dev',
      })
    );
  }),
  rest.patch('/category/1', (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete('/category/1', (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
