import { rest } from 'msw';
import { Token } from './types';

export const handlers = [
  rest.get('/auth/login', (_req, res, ctx) => {
    return res(
      ctx.json<Token>({
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      })
    );
  }),
];
