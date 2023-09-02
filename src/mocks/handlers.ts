import { AuthToken } from '@/types/AuthToken';
import { Category } from '@/types/Category';
import { Post } from '@/types/Post';
import { User } from '@/types/User';
import { rest } from 'msw';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export const handlers = [
  // auth
  rest.post(`${baseURL}/api/v1/auth/login`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<AuthToken>({
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      })
    );
  }),
  rest.post(`${baseURL}/api/v1/auth/verifyToken`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<User>({
        sub: 'abcdef-cccc-bbbb-aaaa-abcdefghilmn',
        scope: 'aws.cognito.signin.user.admin',
      })
    );
  }),
  // category
  rest.post(`${baseURL}/api/v1/category`, (_req, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.get(`${baseURL}/api/v1/category`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
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
  rest.get(`${baseURL}/api/v1/category/1`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Category>({
        id: 1,
        name: 'dev',
      })
    );
  }),
  rest.patch(`${baseURL}/api/v1/category/1`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete(`${baseURL}/api/v1/category/1`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  // post
  rest.post(`${baseURL}/api/v1/post`, (_req, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.get(`${baseURL}/api/v1/post?page=1`, (_req, res, ctx) => {
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
            category: {
              id: 1,
              name: 'dev',
            },
            draft: 'draft',
            tags: '#dev',
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 2,
            category: {
              id: 1,
              name: 'dev',
            },
            draft: 'draft',
            tags: '#dev',
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 3,
            category: {
              id: 1,
              name: 'dev',
            },
            draft: 'draft',
            tags: '#dev',
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 4,
            category: {
              id: 1,
              name: 'dev',
            },
            draft: 'draft',
            tags: '#dev',
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 5,
            category: {
              id: 1,
              name: 'dev',
            },
            draft: 'draft',
            tags: '#dev',
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 6,
            category: {
              id: 1,
              name: 'dev',
            },
            draft: 'draft',
            tags: '#dev',
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 7,
            category: {
              id: 1,
              name: 'dev',
            },
            draft: 'draft',
            tags: '#dev',
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 8,
            category: {
              id: 1,
              name: 'dev',
            },
            draft: 'draft',
            tags: '#dev',
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 9,
            category: {
              id: 1,
              name: 'dev',
            },
            draft: 'draft',
            tags: '#dev',
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
          {
            id: 10,
            category: {
              id: 1,
              name: 'dev',
            },
            draft: 'draft',
            tags: '#dev',
            title: 'title',
            content: 'content',
            modified_at: new Date(),
          },
        ],
      })
    );
  }),
  rest.get(`${baseURL}/api/v1/post/1`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Post>({
        id: 1,
        category: {
          id: 1,
          name: 'dev',
        },
        draft: 'draft',
        tags: '#dev',
        title: 'title',
        content: 'content',
        modified_at: new Date(),
      })
    );
  }),
  rest.patch(`${baseURL}/api/v1/post/1`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete(`${baseURL}/api/v1/post/1`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
