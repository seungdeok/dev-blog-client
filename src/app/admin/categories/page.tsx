'use client';

import { AdminCategoryCard } from '@/components/card/AdminCategoryCard';
import { useState } from 'react';
import { styled } from 'styled-components';

const S = {
  container: styled.div`
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
    height: 100%;
    width: 100%;
  `,
  heading: styled.h1`
    font-weight: bold;
    font-size: 32px;
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.text['222222']};
    margin-top: 12px;
  `,
  section: styled.section`
    width: 100%;
    margin-top: 48px;
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  `,
  sectionColContent: styled.ul`
    width: 100%;
    margin-top: 24px;
    
    a {
      ${({ theme }) =>
        theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
    }
  `,
  form: styled.form`
    input {
      width: 200px;
      height: 40px;
    }
    button {
      margin-left: 8px;
      padding: 8px 6px;
    }
  `,
  sectionHeading: styled.h2`
    font-weight: bold;
    font-size: 24px;
  `,
};

export default function AdminCategoriesPage() {
  const [categoryName, setCategoryName] = useState('');
  const data = [
    {
      id: 1,
      name: 'category1',
    },
    {
      id: 2,
      name: 'category2',
    },
    {
      id: 3,
      name: 'category3',
    },
    {
      id: 4,
      name: 'category4',
    },
    {
      id: 5,
      name: 'category5',
    },
  ];

  const handleChange = ({ target }: { target: { value: string } }) => {
    setCategoryName(target.value);
  };

  const handleSubmit = () => {
    console.log(categoryName);
  };

  const handleUpdate = (id: number, name: string) => {
    console.log(id, name);
  };
  const handleDelete = (id: number) => {
    console.log(id);
  };

  return (
    <S.container>
      <S.heading>카테고리 관리</S.heading>
      <S.section>
        <S.sectionHeading>New</S.sectionHeading>
        <S.form>
          <input value={categoryName} onChange={handleChange} />
          <button type="button" onClick={handleSubmit}>
            submit
          </button>
        </S.form>
        <S.sectionColContent>
          <S.sectionHeading>Categories</S.sectionHeading>
          {data.map(category => (
            <AdminCategoryCard
              key={category.id}
              name={category.name}
              onUpdate={(name: string) => handleUpdate(category.id, name)}
              onDelete={() => handleDelete(category.id)}
            />
          ))}
        </S.sectionColContent>
      </S.section>
    </S.container>
  );
}
