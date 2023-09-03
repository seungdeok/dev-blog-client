'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import * as S from './page.style';
import { postAPI } from '@/api/post';
import { TagCard } from '@/components/card/TagCard';
import { PostCard } from '@/components/card/PostCard';
import { LoadingSkeleton } from '@/components/loading/LoadingSkeleton';
import { Pagination } from '@/components/Pagination';
import { Post } from '@/types/Post';
import { tagAPI } from '@/api/tag';
import { Tag } from '@/types/Tag';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [tagList, setTagList] = useState<Tag[]>([]);
  const [postList, setPostList] = useState<Post[]>([]);
  const [total, setTotal] = useState(0);

  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const currentPage = page ? Number(page) : 1;
  const maxPage = Math.ceil(total / 10);

  useEffect(() => {
    async function initRequest() {
      const [tagResponse, postResponse] = await Promise.all([
        tagAPI.list(),
        postAPI.list(currentPage),
      ]);

      setLoading(false);
      setTagList([...tagResponse]);
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
                  marginTop: 12,
                  marginRight: 12,
                  borderRadiux: 16,
                  width: 82,
                  height: 34,
                }}
              />
              <LoadingSkeleton
                styles={{
                  marginTop: 12,
                  marginRight: 12,
                  borderRadiux: 16,
                  width: 82,
                  height: 34,
                }}
              />
            </S.sectionRowContent>
          ) : (
            <S.sectionRowContent>
              {tagList.map(item => {
                return (
                  <Link key={item.name} href={`/tags/${item.name}`}>
                    <TagCard tagName={item.name} />
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
