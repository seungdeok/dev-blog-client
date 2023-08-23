import { styled } from 'styled-components';

interface Props {
  categoryName: string;
}

const S = {
  cardContainer: styled.li`
    border: 1px solid #ecf0f2;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.gray['747474']};
    padding: 8px 16px;
    text-align: center;
    border-radius: 16px;
    cursor: pointer;
    margin-right: 12px;
    transition: 0.3s;
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => theme.colors.text['222222']};
    }
  `,
};

export function CategoryCard({ categoryName }: Props) {
  return <S.cardContainer>{categoryName}</S.cardContainer>;
}
