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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <WithAuthSession>
          <ReactQueryProvider>
            <StyledComponentsRegistry>
              <GlobalStyles />
              <ThemeProvider theme={theme}>
                <Header />
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
