'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { categoryAPI } from '@/api/category';
import { AdminCategoryCard } from '@/components/card/AdminCategoryCard';
import WithAuth from '@/components/hocs/WithAuth';
import { Category } from '@/types/Category';

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
  ${({ theme }) => theme.MIXINS.flexBox('row', 'flex-start', 'flex-start')};
    input[type="text"] {
      width: 200px;
      height: 40px;
    }
    p {
      margin-top: 4px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.status.failure};
    }
    input[type="submit"] {
      margin-left: 8px;
      padding: 8px 6px;
      height: 40px;
    }
  `,
  sectionHeading: styled.h2`
    font-weight: bold;
    font-size: 24px;
  `,
  input: styled.div`
  `,
};

interface FormProps {
  categoryName: string;
}

export default function AdminCategoriesPage() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const defaultValues = {
    categoryName: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  async function initRequest() {
    const categoryResponse = await categoryAPI.list();
    setCategoryList([...categoryResponse]);
  }

  const handleUpdate = async (id: number, name: string) => {
    await categoryAPI.update(id, name);
    await initRequest();
  };

  const handleDelete = async (id: number) => {
    await categoryAPI.remove(id);
    await initRequest();
  };

  const onSubmit = async (data: FormProps) => {
    await categoryAPI.create(data.categoryName);
    await initRequest();
  };

  useEffect(() => {
    initRequest();
  }, []);

  return (
    <WithAuth>
      <S.container>
        <S.heading>카테고리 관리</S.heading>
        <S.section>
          <S.sectionHeading>New</S.sectionHeading>
          <S.form onSubmit={handleSubmit(onSubmit)}>
            <S.input>
              <input
                type="text"
                {...register('categoryName', { required: true })}
              />
              {errors.categoryName && <p>카테고리 형식에 맞지 않습니다</p>}
            </S.input>
            <input type="submit" value="등록" />
          </S.form>
          <S.sectionColContent>
            <S.sectionHeading>Categories</S.sectionHeading>
            {categoryList.map(item => (
              <AdminCategoryCard
                key={item.name}
                name={item.name}
                onUpdate={(name: string) => handleUpdate(item.id, name)}
                onDelete={() => handleDelete(item.id)}
              />
            ))}
          </S.sectionColContent>
        </S.section>
      </S.container>
    </WithAuth>
  );
}
