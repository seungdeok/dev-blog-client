import { useRouter } from 'next/navigation';
import * as S from './Pagination.style';

interface Props {
  maxPage: number;
  currentPage: number;
}

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
