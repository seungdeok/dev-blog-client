/* eslint-disable no-alert */
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
    padding: 0 16px;
    z-index: 1001;

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
    path: '/admin/categories',
    label: '카테고리',
  },
  {
    path: '/admin/posts',
    label: '포스트',
  },
];

export const AdminHeader = () => {
  const handleClick = () => {
    // if (isLoggedIn && window.confirm('로그아웃하시겠습니까?')) {
    //   signOut();
    // }
  };

  // eslint-disable-next-line no-unused-vars
  const handleLink = (e: React.MouseEvent<HTMLElement>) => {
    // if (!isLoggedIn) {
    //   e.preventDefault();
    //   window.alert('접근 권한이 없습니다');
    // }
  };

  return (
    <S.header>
      <Link href="/admin">
        <Image alt="avatar" src="/avatar.jpeg" width={48} height={48} />
      </Link>
      <S.links>
        {routes.map(route => (
          <Link href={route.path} key={route.path} onClick={handleLink}>
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
