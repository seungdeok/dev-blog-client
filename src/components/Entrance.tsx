import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { styled } from 'styled-components';

const S = {
  container: styled.section`
    ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'center')};
    margin: 100px 0;
    width: calc(448px - 128px);
    background-color: ${({ theme }) => theme.colors.gray.f5f6f7};
    box-shadow: -24px -24px 48px ${({ theme }) => theme.colors.white};
      24px 24px 48px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 48px 32px;
  `,
  cardWrap: styled.form`
    width: 100%;
  `,
  heading: styled.h1`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  `,
  input: styled.div`
    margin-top: 24px;
    width: 100%;
    ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'center')};

    input {
      width: 100%;
      height: 40px;
    }
  `,
  actions: styled.div`
    margin-top: 48px;

    input {
      ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'center')};
      padding: 16px 0px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.gray['747474']};
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;
      opacity: .75;
      border: none;
      cursor: pointer;
    
      &:hover {
        opacity: 1;
        background-color: ${({ theme }) => theme.colors.black};
      }
    }
  `,
};

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
