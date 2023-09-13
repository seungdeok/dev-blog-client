import Link from 'next/link';
import Image from 'next/image';
import { signOut } from '@/utils/auth/signOut';
import * as S from './Header.style';

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
    <S.adminHeader>
      <Link href="/admin">
        <Image priority alt="avatar" src="/avatar.png" width={48} height={48} />
      </Link>
      <S.adminLinks>
        {routes.map(route => (
          <Link href={route.path} key={route.path}>
            <li>{route.label}</li>
          </Link>
        ))}
      </S.adminLinks>
      <S.adminAction type="button" onClick={handleClick}>
        sign out
      </S.adminAction>
    </S.adminHeader>
  );
};
