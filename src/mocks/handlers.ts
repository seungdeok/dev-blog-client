import { AuthToken } from '@/types/AuthToken';
import { User } from '@/types/User';
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
  rest.get('/auth/verifyToken', (_req, res, ctx) => {
    return res(
      ctx.json<User>({
        sub: 'abcdef-cccc-bbbb-aaaa-abcdefghilmn',
        scope: 'aws.cognito.signin.user.admin',
      })
    );
  }),
];
