import { beforeDateFormat } from '@/utils/dateFormat';
import { styled } from 'styled-components';

interface Props {
  title: string;
  draft: string;
  modified_at: Date;
}

const S = {
  postCard: styled.li`
    width: 100%;
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.gray.f9fbfc};
    border: 1px solid ${({ theme }) => theme.colors.gray.f9fbfc};
    
    &:hover {
      transition: all 0.2s ease-out;
      box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
      top: -4px;
      border: 1px solid ${({ theme }) => theme.colors.gray.eaeaea};
      background-color: ${({ theme }) => theme.colors.white};
    }
  `,
  cardIntro: styled.div`
    width: 100%;
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')};
  `,
  cardHeading: styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text['222222']};
    ${({ theme }) => theme.MIXINS.textEllipsis(1)};
  `,
  cardDatetime: styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray['747474']};
    margin-left: 4px;
    min-width: max-content;
  `,
  cardContent: styled.p`
    line-height: 1.6;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.text['444444']};
    ${({ theme }) => theme.MIXINS.textEllipsis(3)};
  `,
};

export function PostCard({ title, draft, modified_at: modifiedAt }: Props) {
  return (
    <S.postCard>
      <S.cardIntro>
        <S.cardHeading>{title}</S.cardHeading>
        <S.cardDatetime>{beforeDateFormat(modifiedAt)}</S.cardDatetime>
      </S.cardIntro>
      <S.cardContent>{draft}</S.cardContent>
    </S.postCard>
  );
}
