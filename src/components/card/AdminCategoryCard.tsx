import { useState } from 'react';
import { styled } from 'styled-components';

interface Props {
  name: string;
  // eslint-disable-next-line no-unused-vars
  onUpdate: (name: string) => void;
  onDelete: () => void;
}

const S = {
  cardContainer: styled.li`
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'flex-start')};
    margin: 8px 0;
  `,
  input: styled.input`
    width: 200px;
    height: 40px;
  `,
  actions: styled.div`
    margin-left: 8px;
  `,
  action: styled.button`
    padding: 8px 6px;
  `,
};

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
