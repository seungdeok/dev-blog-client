'use client';

import { styled } from 'styled-components';

const S = {
  button: styled.button`
    padding: 32px;
    background-color: blue;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
      color: #fff;
    }
  `,
};

export default function Home() {
  return <S.button>button</S.button>;
}
