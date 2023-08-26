import { beforeDateFormat } from '@/utils/dateFormat';
import { styled } from 'styled-components';

interface Props {
  title: string;
  draft: string;
  modified_at: Date;
  // eslint-disable-next-line no-unused-vars
  onDelete: (e: React.MouseEvent<HTMLElement>) => void;
}

const S = {
  postCard: styled.li`
    width: 100%;
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
    padding: 16px 0;
    transition: 0.3s;
    opacity: .75;

    &:hover {
      opacity: 1;
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
  `,
  cardDatetime: styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray['747474']};
  `,
  cardContent: styled.p`
    line-height: 1.6;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.text['444444']};
  `,
  actions: styled.div`
    width: 100%;
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'flex-end')};
  `,
  action: styled.button`
    padding: 8px 6px;
  `,
};

export function AdminPostCard({
  title,
  draft,
  modified_at: modifiedAt,
  onDelete,
}: Props) {
  return (
    <S.postCard>
      <S.cardIntro>
        <S.cardHeading>{title}</S.cardHeading>
        <S.cardDatetime>{beforeDateFormat(modifiedAt)}</S.cardDatetime>
      </S.cardIntro>
      <S.cardContent>{draft}</S.cardContent>
      <S.actions>
        <S.action type="button" onClick={onDelete}>
          삭제
        </S.action>
      </S.actions>
    </S.postCard>
  );
}
