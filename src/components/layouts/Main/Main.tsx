import { styled } from 'styled-components';

import { ReactNode } from 'react';

const S = {
  container: styled.main`
    ${({ theme }) => theme.MIXINS.flexBox('column')}
    width: 100%;
    height: 100vh;
    padding: 80px 16px 20px;
  `,
};

export const Main = ({ children }: { children: ReactNode }) => {
  return <S.container>{children}</S.container>;
};
