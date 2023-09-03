import { cleanup, screen, waitFor } from '@testing-library/react';
import HomePage from '@/app/page';
import { render } from '@/utils/render';
import TagPage from '@/app/tags/[tag_name]/page';

jest.mock('next/navigation', () => {
  return {
    useRouter: jest.fn(() => ({
      push: jest.fn(),
    })),
    useSearchParams: jest.fn(() => ({
      get: jest.fn(() => '1'),
    })),
    usePathname: jest.fn(),
    useServerInsertedHTML: jest.fn(),
  };
});

describe('UI Testing', () => {
  beforeAll(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => null);
  });
  afterAll(cleanup);

  test('Index Page Redering', async () => {
    render(<HomePage />);
    await waitFor(() => {
      expect(screen.queryAllByText(/title/).length).toBe(10);
    });

    expect(screen.queryByText(/#frontend/)).toBeTruthy();
    expect(screen.queryByText(/#backend/)).toBeTruthy();
  });

  test('Post 상세', async () => {});

  test('Tag Posts 목록', async () => {
    render(
      <TagPage
        params={{
          tag_name: 'frontend',
        }}
      />
    );

    await waitFor(() => {
      expect(screen.queryByText(/frontend/)).toBeTruthy();
      expect(screen.queryAllByText(/title/).length).toBe(10);
    });
  });
});
