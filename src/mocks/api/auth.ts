import { rest } from 'msw';
import { AuthToken } from '@/types/AuthToken';
import { User } from '@sentry/nextjs';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

const handlers = [
  rest.post(`${baseURL}/auth/login`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<AuthToken>({
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      })
    );
  }),
  rest.post(`${baseURL}/auth/verifyToken`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<User>({
        sub: 'abcdef-cccc-bbbb-aaaa-abcdefghilmn',
        scope: 'aws.cognito.signin.user.admin',
      })
    );
  }),
];

export default handlers;
