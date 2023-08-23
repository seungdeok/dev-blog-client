'use client';

import { styled } from 'styled-components';

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
};

export default function AdminCategoriesPage() {
  return (
    <S.container>
      <S.heading>카테고리 관리</S.heading>
      <S.section>
        <S.sectionColContent />
      </S.section>
    </S.container>
  );
}
