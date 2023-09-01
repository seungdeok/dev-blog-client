import { styled } from 'styled-components';
import { useRouter } from 'next/navigation';

interface Props {
  maxPage: number;
  currentPage: number;
}

const S = {
  paginationWrap: styled.div`
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')};

    a, button {
      ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')};
      width: 36px;
      height: 36px;
      cursor: pointer;
      font-weight: bold;
      margin: 0 4px;
    }

    a {
      border-radius: 50%;
    }

    button {
      &:hover {
        text-decoration: underline;
      }
    }
  `,
  active: styled.a`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  `,
  link: styled.a`
    color: ${({ theme }) => theme.colors.text['222222']};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
};

export const Pagination = ({ maxPage, currentPage }: Props) => {
  const router = useRouter();

  const handlePrevLocation = () => {
    if (currentPage === 1) {
      alert('첫 페이지 입니다.');
      return;
    }
    router.push(`?page=${currentPage - 1}`);
  };

  const handleNextLocation = () => {
    if (currentPage === maxPage) {
      alert('마지막 페이지 입니다.');
      return;
    }
    router.push(`?page=${currentPage + 1}`);
  };

  return (
    <S.paginationWrap>
      <button type="button" onClick={handlePrevLocation}>
        이전
      </button>
      {Array.from({ length: maxPage }).map((_, idx) => {
        if (idx + 1 === currentPage) {
          return (
            <S.active key={String(idx + 1)} href={`?page=${idx + 1}`}>
              {idx + 1}
            </S.active>
          );
        }
        return (
          <S.link key={String(idx + 1)} href={`?page=${idx + 1}`}>
            {idx + 1}
          </S.link>
        );
      })}
      <button type="button" onClick={handleNextLocation}>
        다음
      </button>
    </S.paginationWrap>
  );
};
