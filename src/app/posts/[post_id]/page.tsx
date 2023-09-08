'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Renderer } from '@/components/markdown/Renderer';
import { GiscusComment } from '@/components/GiscusComment';
import { LoadingSkeleton } from '@/components/loading/LoadingSkeleton';
import { TagCard } from '@/components/card/TagCard';
import { Share } from '@/components/share/Share';
import { ScrollSpy } from '@/components/scrollspy/ScrollSpy';
import { postAPI } from '@/api/post';
import { Post } from '@/types/Post';
import { beforeDateFormat } from '@/utils/dateFormat';
import * as S from './page.style';

export function PostLoadingPage() {
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

export default function PostPage({ params }: { params?: { post_id: string } }) {
  const [postData, setPostData] = useState<Post>();

  useEffect(() => {
    async function initRequest() {
      const postResponse = await postAPI.show(Number(params!.post_id));
      setPostData(postResponse);
    }
    initRequest();
  }, [params]);

  if (!postData) {
    return <PostLoadingPage />;
  }

  return (
    <S.container>
      <S.contentWrap>
        <S.heading>{postData.title}</S.heading>
        <S.subHeadingWrap>
          <S.datetime>{beforeDateFormat(postData.modified_at)}</S.datetime>
          <Share />
        </S.subHeadingWrap>
        <S.section>
          <Renderer data={postData.content} />
          <S.tags>
            {postData.tags.map(tag => {
              if (!tag) return null;
              return (
                <Link key={tag.name} href={`/tags/${tag.name}`}>
                  <TagCard tagName={tag.name} />
                </Link>
              );
            })}
          </S.tags>
        </S.section>
        <GiscusComment />
        <S.sideWrap>
          <S.scrollspyWrap>
            <ScrollSpy />
          </S.scrollspyWrap>
        </S.sideWrap>
      </S.contentWrap>
    </S.container>
  );
}
