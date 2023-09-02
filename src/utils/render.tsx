/* eslint-disable import/no-extraneous-dependencies */
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import ReactQueryProvider from '@/components/hocs/ReactQueryProvider';
import StyledComponentsRegistry from '@/components/hocs/registry';
import { Footer } from '@/components/layouts/Footer/Footer';
import { Main } from '@/components/layouts/Main/Main';
import { Header } from '@/components/layouts/Header/Header';
import { GlobalStyles } from '@/styles/global';
import theme from '@/styles/theme';

const Wrapper = ({ children }: { children: ReactNode }) => (
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
);

const renderWithTest = (children: ReactNode) =>
  render(<Wrapper>{children}</Wrapper>);

export { renderWithTest as render };
