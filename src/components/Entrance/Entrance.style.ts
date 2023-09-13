import { styled } from 'styled-components';

export const container = styled.section`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'center')};
  margin: 100px 0;
  width: calc(448px - 128px);
  background-color: ${({ theme }) => theme.colors.gray.f5f6f7};
  box-shadow: -24px -24px 48px ${({ theme }) => theme.colors.white};
    24px 24px 48px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 48px 32px;
`;
export const cardWrap = styled.form`
  width: 100%;
`;
export const heading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
export const input = styled.div`
  margin-top: 24px;
  width: 100%;
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'center')};

  input {
    width: 100%;
    height: 40px;
  }
`;

export const actions = styled.div`
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
`;
