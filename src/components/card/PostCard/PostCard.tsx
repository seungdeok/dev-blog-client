import { beforeDateFormat } from '@/utils/dateFormat';
import * as S from './PostCard.style';

interface Props {
  title: string;
  draft: string;
  modified_at: Date;
}

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
