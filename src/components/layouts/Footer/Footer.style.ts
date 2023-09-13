import { styled } from 'styled-components';

export const footer = styled.footer`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
  padding: 40px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray.eaeaea};
`;

export const copyright = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray['747474']};
  text-align: center;
  width: 100%;
`;
