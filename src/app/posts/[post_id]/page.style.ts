import { styled } from 'styled-components';

export const container = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  height: 100%;
  width: 100%;
  padding: 20px; 16px;
`;

export const heading = styled.h1`
  font-weight: bold;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.text['222222']};
`;

export const datetime = styled.p`
  font-size: 14px;
  width: 100%;
  text-align: right;
  color: ${({ theme }) => theme.colors.gray['747474']};
  margin-top: 12px;
`;

export const section = styled.section`
  width: 100%;
  margin-top: 48px;
`;

export const tags = styled.ul`
  border-top: 1px solid #eaecef;
  margin-top: 16px;
  padding-top: 16px;
  flex-wrap: wrap;
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'flex-start')};

  li {
    margin-top: 12px;
  }
`;
