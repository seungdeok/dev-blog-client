import { ReactNode } from 'react';
import * as S from './Main.style';

export const Main = ({ children }: { children: ReactNode }) => {
  return <S.container>{children}</S.container>;
};
