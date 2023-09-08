import { styled } from 'styled-components';

export const listWrap = styled.ul`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};

  ${({ theme }) => theme.media.pc} {
    display: none;
  }
`;
