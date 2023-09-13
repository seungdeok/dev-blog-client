'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { tagAPI } from '@/api/tag';
import { postAPI } from '@/api/post';
import WithAuth from '@/components/hocs/WithAuth';
import { Editor } from '@/components/markdown/Editor';
import { Tag } from '@/types/Tag';
import * as S from './page.style';

interface FormProps {
  title: string;
  draft: string;
  tags: string;
}

export default function AdminPostWritePage() {
  const router = useRouter();
  const [content, setContent] = useState('**Hello world!!!**');
  const [tagList, setTagList] = useState<Tag[]>([]);

  const defaultValues = {
    title: '',
    draft: '',
    tags: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  async function initRequest() {
    const categoryResponse = await tagAPI.list();
    setTagList([...categoryResponse]);
  }

  const onSubmit = async (data: FormProps) => {
    console.log(tagList);
    if (window.confirm('게시하시겠습니까?')) {
      await postAPI.create(
        data.draft,
        data.tags.split(''),
        data.title,
        content
      );
      router.push('/admin/posts');
    }
  };

  useEffect(() => {
    initRequest();
  }, []);

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
            <S.action type="submit" value="게시" />
          </S.form>
        </S.section>
      </S.container>
    </WithAuth>
  );
}
