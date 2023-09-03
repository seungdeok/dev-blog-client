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

export const secondaryHeading = styled.h2`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.text['222222']};
`;

export const section = styled.section`
  width: 100%;
  margin-top: 48px;
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  padding: 0 16px;
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

export const banner = styled.section`
  height: 400px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'center')};

  h1, div {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  div {
    margin-top: 16px;
    line-height: 1.6;
  }
`;
