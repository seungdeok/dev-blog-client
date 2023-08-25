import { AuthToken } from '@/types/AuthToken';
import { rest } from 'msw';

export const handlers = [
  rest.get('/auth/login', (_req, res, ctx) => {
    return res(
      ctx.json<AuthToken>({
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      })
    );
  }),
];
