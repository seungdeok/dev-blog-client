import { styled } from 'styled-components';

export const container = styled.main`
  ${({ theme }) => theme.MIXINS.flexBox('column')}
  width: 100%;
`;
