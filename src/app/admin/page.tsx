'use client';

import { styled } from 'styled-components';
import { useAuthSession } from '@/hooks/useAuthSession';

const S = {
  container: styled.div`
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
    height: 100%;
    width: 100%;
  `,
  heading: styled.h1`
    font-weight: bold;
    font-size: 32px;
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.text['222222']};
    margin-top: 12px;
  `,
  section: styled.section`
    width: 100%;
    margin-top: 48px;
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  `,
  sectionColContent: styled.ul`
    width: 100%;
    margin-top: 12px;
    
    a {
      ${({ theme }) =>
        theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
    }
  `,
  entrance: styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'center')};

    h3 {
      font-size: 20px;
      font-weight: bold;
    }

    button {
      cursor: pointer;
      margin-top: 16px;
      font-size: 16px;
      
      &:hover {
        text-decoration: underline;
      }
    }
  `,
  sectionHeading: styled.h2`
    font-weight: bold;
    font-size: 24px;
  `,
};

export default function AdminPage() {
  const { isLoggedIn, signIn } = useAuthSession();
  if (!isLoggedIn) {
    return (
      <S.entrance>
        <h3>관리자 계정으로 로그인해주세요</h3>
        <button type="button" onClick={() => signIn()}>
          sign in
        </button>
      </S.entrance>
    );
  }

  return (
    <S.container>
      <S.section>
        <S.sectionColContent>
          <S.sectionHeading>통계</S.sectionHeading>
        </S.sectionColContent>
      </S.section>
    </S.container>
  );
}
