'use client';

import { PostCard } from '@/components/card/PostCard';
import Link from 'next/link';
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
    }
  `,
};

export default function CategoryPage({
  params,
}: {
  params: { category_name: string };
}) {
  const posts = [
    {
      id: 1,
      title: 'title',
      draft: 'content draft',
      modified_at: new Date(),
    },
    {
      id: 2,
      title: 'title2',
      draft: 'content draft2',
      modified_at: new Date(),
    },
    {
      id: 3,
      title: 'title3',
      draft: 'content draft2',
      modified_at: new Date(),
    },
    {
      id: 4,
      title: 'title4',
      draft: 'content draft2',
      modified_at: new Date(),
    },
    {
      id: 5,
      title: 'title5',
      draft: 'content draft2',
      modified_at: new Date(),
    },
  ];
  return (
    <S.container>
      <S.secondaryHeading>category</S.secondaryHeading>
      <S.heading>{params.category_name}</S.heading>
      <S.section>
        <S.sectionColContent>
          {posts.map(post => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <PostCard
                title={post.title}
                draft={post.draft}
                modified_at={post.modified_at}
              />
            </Link>
          ))}
        </S.sectionColContent>
      </S.section>
    </S.container>
  );
}
