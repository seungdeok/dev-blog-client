'use client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/global';
import theme from '@/styles/theme';
import { Header } from '@/components/layouts/Header/Header';
import { Main } from '@/components/layouts/Main/Main';
import { Footer } from '@/components/layouts/Footer/Footer';
import StyledComponentsRegistry from '@/components/hocs/ReactQueryProvider';
import ReactQueryProvider from '@/components/hocs/registry';
import WithAuthSession from '@/components/hocs/WithAuthSession';
import { usePathname } from 'next/navigation';
import { AdminHeader } from '@/components/layouts/Header/AdminHeader';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line global-require
  require('../mocks');
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.includes('/admin');

  return (
    <html lang="ko">
      <body>
        <WithAuthSession>
          <ReactQueryProvider>
            <StyledComponentsRegistry>
              <GlobalStyles />
              <ThemeProvider theme={theme}>
                {isAdmin ? <AdminHeader /> : <Header />}
                <Main>{children}</Main>
                <Footer />
              </ThemeProvider>
            </StyledComponentsRegistry>
          </ReactQueryProvider>
        </WithAuthSession>
      </body>
    </html>
  );
}
