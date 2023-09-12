import { styled } from 'styled-components';

export const container = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  height: 100%;
  width: 100%;
`;

export const heading = styled.h1`
  font-weight: bold;
  font-size: 32px;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.text['222222']};
  margin-top: 12px;
`;

export const section = styled.section`
  width: 100%;
  margin-top: 48px;
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  padding: 0 16px;
`;

export const form = styled.form`
  width: 100%;
  margin-top: 12px;
  
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
`;

export const select = styled.select`
  width: 200px;
  height: 40px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.text['222222']};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.text['222222']};
`;

export const input = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 12px;

  input {
    padding-left: 10px;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.text['222222']};
  }
`;

export const editorWrap = styled.div`
  width: 100%;
  margin-top: 12px;
`;

export const action = styled.input`
  margin-top: 12px;
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
`;
