import { useState } from 'react';
import * as S from './AdminTagCard.style';

interface Props {
  name: string;
  // eslint-disable-next-line no-unused-vars
  onUpdate: (name: string) => void;
  onDelete: () => void;
}

export function AdminCategoryCard({ name, onUpdate, onDelete }: Props) {
  const [categoryName, setCategoryName] = useState(name);
  const handleUpdate = () => {
    onUpdate(categoryName);
  };

  const handleChange = ({ target }: { target: { value: string } }) => {
    setCategoryName(target.value);
  };

  return (
    <S.cardContainer>
      <S.input value={categoryName} onChange={handleChange} />
      <S.actions>
        <S.action type="button" onClick={handleUpdate}>
          수정
        </S.action>
        <S.action type="button" onClick={onDelete}>
          삭제
        </S.action>
      </S.actions>
    </S.cardContainer>
  );
}
