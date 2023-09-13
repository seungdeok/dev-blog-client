import * as S from './TagCard.style';

interface Props {
  tagName: string;
}

export function TagCard({ tagName }: Props) {
  return <S.cardContainer>{`#${tagName}`}</S.cardContainer>;
}
