'use client';

import { styled } from 'styled-components';
import WithAuth from '@/components/hocs/WithAuth';

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
    padding: 20px;
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
  return (
    <WithAuth>
      <S.container>
        <S.section>
          <S.sectionColContent>
            <S.sectionHeading>통계</S.sectionHeading>
          </S.sectionColContent>
        </S.section>
      </S.container>
    </WithAuth>
  );
}
