'use client';

import { styled } from 'styled-components';
import { Renderer } from '@/components/markdown/Renderer';

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
    color: ${({ theme }) => theme.colors.text['222222']};
  `,
  datetime: styled.p`
    font-size: 14px;
    width: 100%;
    text-align: right;
    color: ${({ theme }) => theme.colors.gray['747474']};
    margin-top: 12px;
  `,
  thumbnail: styled.div`
    margin-top: 12px;
    position: relative;
    width: 100%;
    padding-top: 50%; 
    
    div {
      max-width: 100%;
      cursor: zoom-in;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
  section: styled.section`
    width: 100%;
    margin-top: 48px;
  `,
};

export default function PostPage({ params }: { params: { post_id: string } }) {
  const post = {
    title: 'Typescript 도입',
    thumbnail: '/avatar.jpeg',
    modified_at: new Date(),
  };

  console.log(params.post_id);

  return (
    <S.container>
      <S.heading>{post.title}</S.heading>
      <S.datetime>{post.modified_at.toDateString()}</S.datetime>
      <S.thumbnail>
        <div style={{ backgroundImage: `url(${post.thumbnail})` }} />
      </S.thumbnail>
      <S.section>
        <Renderer
          data={`
Just a link: https://reactjs.com.
> test
- text2`}
        />
      </S.section>
    </S.container>
  );
}
