'use client';

import { ThemeProvider } from 'styled-components';
import { usePathname } from 'next/navigation';
import { GlobalStyles } from '@/styles/global';
import theme from '@/styles/theme';
import { Header } from '@/components/layouts/Header/Header';
import { Main } from '@/components/layouts/Main/Main';
import { Footer } from '@/components/layouts/Footer/Footer';
import StyledComponentsRegistry from '@/components/hocs/ReactQueryProvider';
import ReactQueryProvider from '@/components/hocs/registry';
import { AdminHeader } from '@/components/layouts/Header/AdminHeader';
import { GTag } from './gtag';
import '@uiw/react-md-editor/markdown-editor.css';

// if (process.env.NODE_ENV === 'development') {
//   // eslint-disable-next-line global-require
//   require('../mocks');
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.includes('/admin');

  return (
    <html lang="ko">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/avatar.png" />
        <link rel="shortcut icon" href="/avatar.png" />
        <GTag />
      </head>
      <body>
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
      </body>
    </html>
  );
}
