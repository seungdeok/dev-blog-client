'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Renderer } from '@/components/markdown/Renderer';
import { postAPI } from '@/api/post';
import { Post } from '@/types/Post';
import { beforeDateFormat } from '@/utils/dateFormat';
import { GiscusComment } from '@/components/GiscusComment';
import { LoadingSkeleton } from '@/components/loading/LoadingSkeleton';
import { TagCard } from '@/components/card/TagCard';
import * as S from './page.style';

export function ScrollSpy({ htmlText }: { htmlText: string }) {
  const [data, setData] = useState<{ id: string; label: string }[]>([]);

  useEffect(() => {
    function parseHTML() {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');
      const sectionSelector = 'h2';
      const sections: {
        id: string;
        label: string;
      }[] = [];

      const sectionElements = doc.querySelectorAll(sectionSelector);

      sectionElements.forEach((sectionElement, index) => {
        const sectionId = `section-${index + 1}`;
        sectionElement.setAttribute('id', sectionId);
        sections.push({
          id: sectionId,
          label: sectionElement.textContent || '',
        });
      });

      return sections;
    }
    setData(parseHTML());
  }, [htmlText]);

  return (
    <S.listWrap>
      {data.map(({ id, label }) => (
        <li key={id}>{label}</li>
      ))}
    </S.listWrap>
  );
}

export function ShareAction() {
  const handleClipboardCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert('링크가 복사되었습니다');
  };

  return (
    <S.actionWrap>
      <li>
        <button type="button" onClick={handleClipboardCopy}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 12C2.25 9.37665 4.37665 7.25 7 7.25H10C10.4142 7.25 10.75 7.58579 10.75 8C10.75 8.41421 10.4142 8.75 10 8.75H7C5.20507 8.75 3.75 10.2051 3.75 12C3.75 13.7949 5.20507 15.25 7 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H7C4.37665 16.75 2.25 14.6234 2.25 12Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.25 8C13.25 7.58579 13.5858 7.25 14 7.25H17C19.6234 7.25 21.75 9.37665 21.75 12C21.75 14.6234 19.6234 16.75 17 16.75H14C13.5858 16.75 13.25 16.4142 13.25 16C13.25 15.5858 13.5858 15.25 14 15.25H17C18.7949 15.25 20.25 13.7949 20.25 12C20.25 10.2051 18.7949 8.75 17 8.75H14C13.5858 8.75 13.25 8.41421 13.25 8Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12Z"
              fill="white"
            />
          </svg>
        </button>
      </li>
    </S.actionWrap>
  );
}

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
          <ShareAction />
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
            <ScrollSpy htmlText={postData.content} />
          </S.scrollspyWrap>
        </S.sideWrap>
      </S.contentWrap>
    </S.container>
  );
}
