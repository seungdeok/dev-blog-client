'use client';

import { useForm } from 'react-hook-form';
import { useTokenValidation } from '@/hooks/useTokenValidation';
import { authAPI } from '@/api/auth';
import { Entrance, FormProps } from '../Entrance';

interface Props {
  children: React.ReactNode;
}

export default function WithAuth({ children }: Props) {
  const defaultValues = {
    username: '',
    password: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const { loading, isLoggedIn } = useTokenValidation();

  const onSubmit = async (data: FormProps) => {
    await authAPI.login(data.username, data.password);
  };

  if (loading) {
    return <div>loading...</div>;
  }

  if (!loading && !isLoggedIn) {
    return (
      <Entrance
        errors={errors}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
      />
    );
  }

  return children;
}
