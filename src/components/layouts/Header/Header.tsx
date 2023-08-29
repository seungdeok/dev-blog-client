import { styled } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const S = {
  header: styled.header`
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
    width: 100%;
    height: 80px;
    padding: 0 16px;

    img {
      border-radius: 50%;
    }
  `,
};

export const Header = () => {
  return (
    <S.header>
      <div>
        <Link href="/">
          <Image
            priority
            alt="avatar"
            src="/avatar.png"
            width={48}
            height={48}
          />
        </Link>
      </div>
    </S.header>
  );
};
