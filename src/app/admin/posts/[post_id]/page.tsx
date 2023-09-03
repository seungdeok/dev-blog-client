/* eslint-disable no-alert */

'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { postAPI } from '@/api/post';
import WithAuth from '@/components/hocs/WithAuth';
import { Editor } from '@/components/markdown/Editor';

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
  form: styled.form`
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
  input: styled.div`
    width: 100%;
    height: 40px;
    margin-top: 12px;

    input {
      padding-left: 10px;
      width: 100%;
      height: 100%;
      border: 1px solid ${({ theme }) => theme.colors.text['222222']};
    }
  `,
  editorWrap: styled.div`
    width: 100%;
    margin-top: 12px;
  `,
  action: styled.input`
    margin-top: 12px;
    ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'center')};
    padding: 16px 0px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray['747474']};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;
    opacity: .75;
    border: none;
    cursor: pointer;
  
    &:hover {
      opacity: 1;
      background-color: ${({ theme }) => theme.colors.black};
    }
  `,
};

interface FormProps {
  title: string;
  draft: string;
  tags: string;
}

export default function AdminPostWritePage({
  params,
}: {
  params: { post_id: string };
}) {
  const [content, setContent] = useState('**Hello world!!!**');

  const defaultValues = {
    title: '',
    draft: '',
    tags: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: FormProps) => {
    if (window.confirm('수정하시겠습니까?')) {
      await postAPI.update(
        Number(params.post_id),
        data.draft,
        data.tags.split(','),
        data.title,
        content
      );
      alert('반영되었습니다');
    }
  };

  useEffect(() => {
    async function initRequest() {
      const postResponse = await postAPI.show(Number(params.post_id));
      setContent(postResponse.content);
      setValue('draft', postResponse.draft);
      setValue('tags', postResponse.tags.map(tag => tag.name).join(','));
      setValue('title', postResponse.title);
    }
    initRequest();
  }, [params.post_id, setValue]);

  return (
    <WithAuth>
      <S.container>
        <S.heading>포스트 작성</S.heading>
        <S.section>
          <S.form onSubmit={handleSubmit(onSubmit)}>
            <S.input>
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                {...register('title', { required: true })}
              />
              {errors.draft && <p>제목 형식에 맞지 않습니다</p>}
            </S.input>
            <S.input>
              <input
                type="text"
                placeholder="초안을 입력해주세요"
                {...register('draft', { required: true })}
              />
              {errors.draft && <p>초안 형식에 맞지 않습니다</p>}
            </S.input>
            <S.editorWrap>
              <Editor data={content} setter={setContent} />
            </S.editorWrap>
            <S.input>
              <input
                type="text"
                placeholder="태그를 입력해주세요(#구분자)"
                {...register('tags', { required: true })}
              />
              {errors.tags && <p>태그 형식에 맞지 않습니다</p>}
            </S.input>
            <S.action type="submit" value="수정" />
          </S.form>
        </S.section>
      </S.container>
    </WithAuth>
  );
}
