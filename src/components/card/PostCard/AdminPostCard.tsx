import { beforeDateFormat } from '@/utils/dateFormat';
import * as S from './AdminPostCard.style';

interface Props {
  title: string;
  draft: string;
  modified_at: Date;
  // eslint-disable-next-line no-unused-vars
  onDelete: (e: React.MouseEvent<HTMLElement>) => void;
}

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
