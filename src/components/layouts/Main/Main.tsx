import { styled } from 'styled-components';

import { ReactNode } from 'react';

const S = {
  section: styled.section`
    ${({ theme }) => theme.MIXINS.flexBox('column')}
    width: 100%;
    height: 100vh;
    padding: 80px 0 20px;
  `,
};

export const Main = ({ children }: { children: ReactNode }) => {
  return <S.section>{children}</S.section>;
};
