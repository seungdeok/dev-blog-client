import { styled } from 'styled-components';

export const cardContainer = styled.li`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'flex-start')};
  margin: 8px 0;
`;
export const input = styled.input`
  width: 200px;
  height: 40px;
`;

export const actions = styled.div`
  margin-left: 8px;
`;
export const action = styled.button`
  padding: 8px 6px;
`;
