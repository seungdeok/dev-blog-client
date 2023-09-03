import { Tag } from '@/types/Tag';
import { rest } from 'msw';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

const handlers = [
  rest.post(`${baseURL}/tag`, (_req, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.get(`${baseURL}/tag`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Tag[]>([
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
  rest.get(`${baseURL}/tag/1`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Tag>({
        id: 1,
        name: 'dev',
      })
    );
  }),
  rest.patch(`${baseURL}/tag/1`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete(`${baseURL}/tag/1`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

export default handlers;
