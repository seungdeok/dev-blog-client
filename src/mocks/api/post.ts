import { Post } from '@/types/Post';
import { rest } from 'msw';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

const handlers = [
  rest.post(`${baseURL}/post`, (_req, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.get(`${baseURL}/post?page=1`, (_req, res, ctx) => {
    const page = _req.url.searchParams.get('page');
    return res(
      ctx.status(200),
      ctx.json<{
        data: Post[];
        page: number;
        total: number;
      }>({
        total: 10,
        page: page ? Number(page) : 1,
        data: [
          {
            id: 1,
            draft: 'draft',
            tags: [
              {
                id: 1,
                name: 'dev',
              },
              {
                id: 2,
                name: 'FE',
              },
            ],
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 2,
            draft: 'draft',
            tags: [
              {
                id: 1,
                name: 'dev',
              },
              {
                id: 2,
                name: 'FE',
              },
            ],
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 3,
            draft: 'draft',
            tags: [
              {
                id: 1,
                name: 'dev',
              },
              {
                id: 2,
                name: 'FE',
              },
            ],
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 4,
            draft: 'draft',
            tags: [
              {
                id: 1,
                name: 'dev',
              },
              {
                id: 2,
                name: 'FE',
              },
            ],
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 5,
            draft: 'draft',
            tags: [
              {
                id: 1,
                name: 'dev',
              },
              {
                id: 2,
                name: 'FE',
              },
            ],
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 6,
            draft: 'draft',
            tags: [
              {
                id: 1,
                name: 'dev',
              },
              {
                id: 2,
                name: 'FE',
              },
            ],
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 7,
            draft: 'draft',
            tags: [
              {
                id: 1,
                name: 'dev',
              },
              {
                id: 2,
                name: 'FE',
              },
            ],
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 8,
            draft: 'draft',
            tags: [
              {
                id: 1,
                name: 'dev',
              },
              {
                id: 2,
                name: 'FE',
              },
            ],
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 9,
            draft: 'draft',
            tags: [
              {
                id: 1,
                name: 'dev',
              },
              {
                id: 2,
                name: 'FE',
              },
            ],
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 10,
            draft: 'draft',
            tags: [
              {
                id: 1,
                name: 'dev',
              },
              {
                id: 2,
                name: 'FE',
              },
            ],
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
        ],
      })
    );
  }),
  rest.get(`${baseURL}/post/1`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Post>({
        id: 1,
        draft: 'draft',
        tags: [
          {
            id: 1,
            name: 'dev',
          },
          {
            id: 2,
            name: 'FE',
          },
        ],
        title: 'title',
        content: 'content',
        modified_at: new Date(),
      })
    );
  }),
  rest.patch(`${baseURL}/post/1`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete(`${baseURL}/post/1`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

export default handlers;
