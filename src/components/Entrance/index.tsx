import { FieldErrors, UseFormRegister } from 'react-hook-form';
import * as S from './Entrance.style';

export interface FormProps {
  username: string;
  password: string;
}

interface Props {
  onSubmit: () => void;
  register: UseFormRegister<FormProps>;
  errors: FieldErrors<FormProps>;
}

export function Entrance({ onSubmit, register, errors }: Props) {
  return (
    <S.container>
      <S.cardWrap onSubmit={onSubmit}>
        <S.heading>관리자 계정</S.heading>
        <S.input>
          <label>Email</label>
          <input type="email" {...register('username', { required: true })} />
          {errors.username && <p>이메일 형식에 맞지 않습니다</p>}
        </S.input>
        <S.input>
          <label>Password</label>
          <input
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <p>비밀번호 형식에 맞지 않습니다</p>}
        </S.input>
        <S.actions>
          <input type="submit" value="로그인" />
        </S.actions>
      </S.cardWrap>
    </S.container>
  );
}
