import { styled } from 'styled-components';

export const actionWrap = styled.ul`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'flex-start')};

  li {
    margin-left: 8px;
    width: 32px;
    height: 32px;
    border-radius: 18px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.5;
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')};

    &:hover {
      opacity: 1;
      transition: .3s;
      transform: translateY(-4px);
    }

    svg {

    }
  }
`;
