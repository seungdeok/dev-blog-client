import { styled } from 'styled-components';

export const paginationWrap = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')};

  a, button {
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')};
    width: 36px;
    height: 36px;
    cursor: pointer;
    font-weight: bold;
    margin: 0 4px;
  }

  a {
    border-radius: 50%;
  }

  button {
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const active = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

export const link = styled.a`
  color: ${({ theme }) => theme.colors.text['222222']};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
