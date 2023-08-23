'use client';

import { CategoryCard } from '@/components/card/CategoryCard';
import { PostCard } from '@/components/card/PostCard';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

const S = {
  container: styled.div`
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
    height: 100%;
  `,
  heading: styled.h1`
    font-weight: bold;
    font-size: 32px;
  `,
  intro: styled.div`
    margin-top: 8px;
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')};
  `,
  introDesc: styled.div`
    margin-left: 12px;
  `,
  name: styled.div`
    font-weight: bold;
  `,
  tags: styled.div`
    margin-top: 4px;
    line-heihgt: 1.6;
    color: ${({ theme }) => theme.colors.gray['747474']};
  `,
  links: styled.div`
    margin-top: 4px;

    a {
      svg {
        width: 24px;
        height: 24px;
        fill: black;
      }
    }
  `,
  section: styled.section`
    width: 100%;
    margin-top: 48px;
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  `,
  sectionHeading: styled.h2`
    font-weight: bold;
    font-size: 24px;
  `,
  sectionRowContent: styled.ul`
    margin-top: 12px;
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'flex-start')};
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

export default function HomePage() {
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
      <S.heading>docs.SEUNGDEOK.com</S.heading>
      <S.intro>
        <Image alt="profile" src="/profile.png" width={80} height={80} />
        <S.introDesc>
          <S.name>I`m @seungdeok</S.name>
          <S.tags>
            Frontend Engineer with an focusing on Javascript, Testing,
            Automation, Metoring
          </S.tags>
          <S.links>
            <Link href="https://github.com/seungdeok">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </S.links>
        </S.introDesc>
      </S.intro>
      <S.section>
        <S.sectionHeading>Categories</S.sectionHeading>
        <S.sectionRowContent>
          {React.Children.map(['dev', 'devops', 'project'], category => {
            return (
              <Link key={category} href={`/categories/${category}`}>
                <CategoryCard categoryName={category} />
              </Link>
            );
          })}
        </S.sectionRowContent>
      </S.section>
      <S.section>
        <S.sectionHeading>Latest Posts</S.sectionHeading>
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
