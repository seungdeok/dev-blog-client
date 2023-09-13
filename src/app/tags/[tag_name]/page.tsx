'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { postAPI } from '@/api/post';
import { PostCard } from '@/components/card/PostCard/PostCard';
import { LoadingSkeleton } from '@/components/loading/LoadingSkeleton';
import { Post } from '@/types/Post';
import * as S from './page.style';

export default function TagPage({ params }: { params: { tag_name: string } }) {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initRequest() {
      const postResponse = await postAPI.list(1, params.tag_name);
      setLoading(false);
      setPostList([...postResponse.data]);
    }

    initRequest();
  }, [params.tag_name]);

  return (
    <S.container>
      <S.banner>
        <h1>Tag</h1>
        <div>{params.tag_name}</div>
      </S.banner>
      <S.section>
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
      </S.section>
    </S.container>
  );
}
