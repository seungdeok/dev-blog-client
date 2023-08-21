import { styled } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const S = {
  header: styled.header`
    position: fixed;
    top: 0;
    left: 0;
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
    width: 100%;
    height: 80px;
    padding: 0 40px;
    z-index: 1001;
    background-color: ${({ theme }) => theme.colors.white};
  `,
};

export const Header = () => {
  return (
    <S.header>
      <div>
        <Link href="/">
          <Image alt="avatar" src="/avatar.jpeg" width={48} height={48} />
        </Link>
      </div>
    </S.header>
  );
};
