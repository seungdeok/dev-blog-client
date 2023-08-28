'use client';

import { postAPI } from '@/api/post';
import { PostCard } from '@/components/card/PostCard';
import { Post } from '@/types/Post';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
  secondaryHeading: styled.h2`
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    width: 100%;
    color: ${({ theme }) => theme.colors.text['222222']};
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
      margin-bottom: 16px;
    }
  `,
};

export default function CategoryPage({
  params,
}: {
  params: { category_name: string };
}) {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    async function initRequest() {
      const postResponse = await postAPI.list(1, params.category_name);
      setPostList([...postResponse.data]);
    }

    initRequest();
  }, [params.category_name]);

  return (
    <S.container>
      <S.secondaryHeading>category</S.secondaryHeading>
      <S.heading>{params.category_name}</S.heading>
      <S.section>
        <S.sectionColContent>
          {postList.map(item => (
            <Link key={item.id} href={`/posts/${item.id}`}>
              <PostCard
                title={item.title}
                draft={item.draft}
                modified_at={item.modified_at}
              />
            </Link>
          ))}
        </S.sectionColContent>
      </S.section>
    </S.container>
  );
}
