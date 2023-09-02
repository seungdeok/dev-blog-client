import { cleanup, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import { render } from '@/utils/render';
import { server } from '@/mocks/server';
import { handlers } from '@/mocks/handlers';

jest.mock('next/navigation', () => {
  return {
    useRouter: jest.fn(() => ({
      push: jest.fn(),
    })),
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
    usePathname: jest.fn(),
    useServerInsertedHTML: jest.fn(),
  };
});

describe('', () => {
  beforeAll(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => null);
  });
  afterAll(cleanup);

  test('Index Page Redering', async () => {
    server.use(...handlers);
    render(<HomePage />);

    await screen.findByText(/Blog/);
    await screen.findByText(
      /Frontend Engineer with an focusing on Javascript, Testing, Automation, Metoring/
    );

    const data = await screen.findAllByRole('listitem');
    expect(data.length).toBe(14);
  });

  test('Post 상세', async () => {
    server.use(...handlers);
  });

  test('Tag Posts 목록', () => {
    server.use(...handlers);
  });
});
