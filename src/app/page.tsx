'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useSearchParams } from 'next/navigation';
import { categoryAPI } from '@/api/category';
import { CategoryCard } from '@/components/card/CategoryCard';
import { PostCard } from '@/components/card/PostCard';
import { Category } from '@/types/Category';
import { postAPI } from '@/api/post';
import { Post } from '@/types/Post';
import { LoadingSkeleton } from '@/components/loading/LoadingSkeleton';
import { Pagination } from '@/components/Pagination';

const S = {
  container: styled.div`
    ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'flex-start')};
    height: 100%;
    width: 100%;
  `,
  banner: styled.section`
    height: 400px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'center')};
    
    h1, div {
      color: ${({ theme }) => theme.colors.white};
      text-align: center;
    }

    h1 {
      font-size: 24px;
      font-weight: bold;
    }

    div {
      margin-top: 16px;
      line-height: 1.6;
    }
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
  row: styled.div`
    ${({ theme }) => theme.media.pc} {
      ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'flex-start')};
    }
    width: 100%;
    ${({ theme }) => theme.MIXINS.flexBox('row', 'flex-start', 'center')};
  `,
  mainSection: styled.section`
    width: 66.6%;
    margin-top: 48px;
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};

    ${({ theme }) => theme.media.pc} {
      width: 100%;
    }
    padding: 0 16px;
  `,
  sideSection: styled.section`
    width: 33.3%;
    margin-top: 48px;
    ${({ theme }) => theme.media.pc} {
      margin-left: 0;
      margin-bottom: 48px;
      width: 100%;
    }
    padding: 0 16px;
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  `,
  sectionHeading: styled.h2`
    font-weight: bold;
    font-size: 24px;
  `,
  sectionRowContent: styled.ul`
    flex-wrap: wrap;
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'flex-start')};

    li {
      margin-top: 12px;
    }
  `,
  sectionColContent: styled.ul`
    width: 100%;
    margin-top: 12px;
    
    a {
      ${({ theme }) =>
        theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
      margin: 8px 0;
    }
  `,
  pagination: styled.div`
    width: 100%;
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')};
    margin: 24px 0;
  `,
};

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [postList, setPostList] = useState<Post[]>([]);
  const [total, setTotal] = useState(0);

  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const currentPage = page ? Number(page) : 1;
  const maxPage = Math.ceil(total / 10);

  useEffect(() => {
    async function initRequest() {
      const [categoryResponse, postResponse] = await Promise.all([
        categoryAPI.list(),
        postAPI.list(currentPage),
      ]);

      setLoading(false);
      setCategoryList([...categoryResponse]);
      setPostList([...postResponse.data]);
      setTotal(postResponse.total);
    }
    initRequest();
  }, [currentPage]);

  return (
    <S.container>
      <S.banner>
        <h1>Blog</h1>
        <div>
          Frontend Engineer with an focusing on Javascript, Testing, Automation,
          Metoring
        </div>
      </S.banner>
      <S.row>
        <S.mainSection>
          <S.sectionHeading>Latest Posts</S.sectionHeading>
          {loading ? (
            <S.sectionColContent>
              <LoadingSkeleton
                count={5}
                styles={{
                  padding: '16px',
                  margin: '8px 0',
                  width: '100%',
                  height: 88,
                }}
              />
            </S.sectionColContent>
          ) : (
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
          )}
          <S.pagination>
            <Pagination maxPage={maxPage} currentPage={currentPage} />
          </S.pagination>
        </S.mainSection>
        <S.sideSection>
          <S.sectionHeading>Tags</S.sectionHeading>
          {loading ? (
            <S.sectionRowContent>
              <LoadingSkeleton
                styles={{
                  'margin-right': '12px',
                  'border-radius': '16px',
                  width: 82,
                  height: 34,
                }}
              />
              <LoadingSkeleton
                styles={{
                  'margin-right': '12px',
                  'border-radius': '16px',
                  width: 82,
                  height: 34,
                }}
              />
            </S.sectionRowContent>
          ) : (
            <S.sectionRowContent>
              {categoryList.map(item => {
                return (
                  <Link key={item.name} href={`/categories/${item.name}`}>
                    <CategoryCard categoryName={item.name} />
                  </Link>
                );
              })}
            </S.sectionRowContent>
          )}
        </S.sideSection>
      </S.row>
    </S.container>
  );
}
