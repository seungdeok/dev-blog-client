'use client';

import { Editor } from '@/components/markdown/Editor';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
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
    
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  `,
  select: styled.select`
    width: 200px;
    height: 40px;
    padding-left: 10px;
    color: ${({ theme }) => theme.colors.text['222222']};
    font-weight: 500;
    border: 1px solid ${({ theme }) => theme.colors.text['222222']};
  `,
  input: styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.text['222222']};
    margin-top: 12px;
  `,
  editorWrap: styled.div`
    width: 100%;
    margin-top: 12px;
  `,
  action: styled.button`
    margin-top: 12px;
  `,
};

export default function AdminPostWritePage() {
  const router = useRouter();
  const [data, setData] = useState('**Hello world!!!**');
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = () => {
    if (window.confirm('게시하시게습니까?')) {
      console.log({ categoryName, data });
      router.push('/admin/posts');
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategoryName(e.target.value);
  };

  return (
    <S.container>
      <S.heading>포스트 작성</S.heading>
      <S.section>
        <S.sectionColContent>
          <S.select onChange={handleSelectChange}>
            <option disabled selected>
              카테고리 선택
            </option>
            <option value="dev">dev</option>
          </S.select>
          <S.input placeholder="제목을 입력해주세요" />
          <S.input placeholder="초안을 입력해주세요" />
          <S.editorWrap>
            <Editor data={data} setter={setData} />
          </S.editorWrap>
          <S.action type="button" onClick={handleSubmit}>
            게시
          </S.action>
        </S.sectionColContent>
      </S.section>
    </S.container>
  );
}
