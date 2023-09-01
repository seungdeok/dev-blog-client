'use client';

import { styled } from 'styled-components';
import { Renderer } from '@/components/markdown/Renderer';
import { useEffect, useState } from 'react';
import { postAPI } from '@/api/post';
import { Post } from '@/types/Post';
import { beforeDateFormat } from '@/utils/dateFormat';
import { GiscusComment } from '@/components/GiscusComment';
import { LoadingSkeleton } from '@/components/loading/LoadingSkeleton';
import { CategoryCard } from '@/components/card/CategoryCard';
import Link from 'next/link';

const S = {
  container: styled.div`
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
    height: 100%;
    width: 100%;
    padding: 20px; 16px;
  `,
  heading: styled.h1`
    font-weight: bold;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.text['222222']};
  `,
  datetime: styled.p`
    font-size: 14px;
    width: 100%;
    text-align: right;
    color: ${({ theme }) => theme.colors.gray['747474']};
    margin-top: 12px;
  `,
  section: styled.section`
    width: 100%;
    margin-top: 48px;
  `,
  tags: styled.ul`
    border-top: 1px solid #eaecef;
    padding-top: 16px;
    flex-wrap: wrap;
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'flex-start')};

    li {
      margin-top: 12px;
    }
  `,
};

export default function PostPage({ params }: { params: { post_id: string } }) {
  const [postData, setPostData] = useState<Post>();

  useEffect(() => {
    async function initRequest() {
      const postResponse = await postAPI.show(Number(params.post_id));
      setPostData(postResponse);
    }
    initRequest();
  }, [params.post_id]);

  if (!postData) {
    return (
      <S.container>
        <S.heading>
          <LoadingSkeleton styles={{ width: 320, height: 32 }} />
        </S.heading>
        <S.datetime>
          <LoadingSkeleton styles={{ width: 64, height: 14 }} />
        </S.datetime>
        <S.section>
          <LoadingSkeleton styles={{ width: 320, height: 32 }} />
          <LoadingSkeleton styles={{ width: 144, height: 14, marginTop: 24 }} />
          <LoadingSkeleton styles={{ width: 64, height: 14, marginTop: 16 }} />
          <LoadingSkeleton styles={{ width: 240, height: 14, marginTop: 16 }} />
        </S.section>
      </S.container>
    );
  }

  return (
    <S.container>
      <S.heading>{postData.title}</S.heading>
      <S.datetime>{beforeDateFormat(postData.modified_at)}</S.datetime>
      <S.section>
        <Renderer data={postData.content} />
        <S.tags>
          {postData.tags.split('#').map(tag => {
            if (!tag) return null;
            return (
              <Link key={tag} href={`/categories/${tag}`}>
                <CategoryCard categoryName={`#${tag}`} />
              </Link>
            );
          })}
        </S.tags>
      </S.section>
      <GiscusComment />
    </S.container>
  );
}
