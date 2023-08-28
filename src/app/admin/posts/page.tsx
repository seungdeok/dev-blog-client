'use client';

import Link from 'next/link';
import { styled } from 'styled-components';
import { AdminPostCard } from '@/components/card/AdminPostCard';
import { Post } from '@/types/Post';
import { useEffect, useState } from 'react';
import { postAPI } from '@/api/post';
import WithAuth from '@/components/hocs/WithAuth';

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
  floatingAction: styled.div`
    position: fixed;
    right: 16px;
    bottom: 66px;

    a {
      background-color: ${({ theme }) => theme.colors.primary};
      width: 52px;
      height: 52px;
      ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'center')};
      border-radius: 50%;

      svg {
        height: 24px;
      }
    }
  `,
};

export default function AdminPostPage() {
  const [postList, setPostList] = useState<Post[]>([]);

  async function initRequest() {
    const postResponse = await postAPI.list();
    setPostList([...postResponse.data]);
  }

  const handleDelete =
    (id: number) => async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (window.confirm('삭제하시겠습니까?')) {
        await postAPI.remove(id);
        await initRequest();
      }
    };

  useEffect(() => {
    initRequest();
  }, []);

  return (
    <WithAuth>
      <S.container>
        <S.heading>포스트 관리</S.heading>
        <S.section>
          <S.sectionColContent>
            {postList.map(item => (
              <Link key={item.id} href={`/admin/posts/${item.id}`}>
                <AdminPostCard
                  title={item.title}
                  draft={item.draft}
                  modified_at={item.modified_at}
                  onDelete={handleDelete(item.id)}
                />
              </Link>
            ))}
          </S.sectionColContent>
        </S.section>
        <S.floatingAction>
          <Link href="/admin/write">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.5356 3.8076C15.7071 2.63603 17.6066 2.63603 18.7782 3.8076L20.1924 5.22182C21.364 6.39339 21.364 8.29289 20.1924 9.46446L9.7999 19.857C9.6603 19.9966 9.4825 20.0917 9.28891 20.1304L3.98561 21.1911C3.28589 21.331 2.66897 20.7141 2.80892 20.0144L3.86958 14.7111C3.90829 14.5175 4.00345 14.3397 4.14305 14.2001L14.5356 3.8076ZM17.7175 4.86826L19.1318 6.28248C19.7175 6.86826 19.7175 7.81801 19.1318 8.4038L17.5407 9.99482L14.0052 6.45929L15.5962 4.86826C16.182 4.28248 17.1318 4.28248 17.7175 4.86826ZM12.9445 7.51995L5.31076 15.1537L4.42687 19.5731L8.84629 18.6893L16.4801 11.0555L12.9445 7.51995Z"
                fill="white"
              />
            </svg>
          </Link>
        </S.floatingAction>
      </S.container>
    </WithAuth>
  );
}
