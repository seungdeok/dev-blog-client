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
  padding: 0 16px;
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
`;

export const sectionColContent = styled.ul`
  width: 100%;
  margin-top: 12px;
  
  a {
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
    margin-bottom: 16px;
  }
`;

export const floatingAction = styled.div`
  position: fixed;
  right: 16px;
  bottom: 66px;

  a {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 52px;
    height: 52px;
    ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'center')};
    border-radius: 50%;

    svg {
      height: 24px;
    }
  }
`;

export const pagination = styled.div`
  width: 100%;
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')};
  margin: 24px 0;
`;
