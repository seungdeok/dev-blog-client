/* eslint-disable no-alert */
import { styled } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from '@/utils/auth/signOut';

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
  links: styled.ul`
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')}
    height: 100%;
    
    li {
      padding: 8px 8px;
      color: ${({ theme }) => theme.colors.gray['747474']};
      font-weight: 500;

      &:hover {
        color: ${({ theme }) => theme.colors.black};
      }
    }
  `,
  action: styled.button`
    font-size: 16px;
  `,
};

export const routes = [
  {
    path: '/admin/posts',
    label: '포스트',
  },
];

export const AdminHeader = () => {
  const handleClick = () => {
    if (window.confirm('로그아웃하시겠습니까?')) {
      signOut();
      window.location.reload();
    }
  };

  return (
    <S.header>
      <Link href="/admin">
        <Image priority alt="avatar" src="/avatar.png" width={48} height={48} />
      </Link>
      <S.links>
        {routes.map(route => (
          <Link href={route.path} key={route.path}>
            <li>{route.label}</li>
          </Link>
        ))}
      </S.links>
      <S.action type="button" onClick={handleClick}>
        sign out
      </S.action>
    </S.header>
  );
};
