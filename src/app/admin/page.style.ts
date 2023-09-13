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
  padding: 20px;
`;

export const sectionColContent = styled.ul`
  width: 100%;
  margin-top: 12px;
  
  a {
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  }
`;

export const entrance = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'center')};

  h3 {
    font-size: 20px;
    font-weight: bold;
  }

  button {
    cursor: pointer;
    margin-top: 16px;
    font-size: 16px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const sectionHeading = styled.h2`
  font-weight: bold;
  font-size: 24px;
`;
