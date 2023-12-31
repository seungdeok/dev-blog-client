import { styled } from 'styled-components';

export const cardContainer = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.gray.eaeaea};
  background-color: #fff;
  color: ${({ theme }) => theme.colors.gray['747474']};
  padding: 8px 16px;
  text-align: center;
  border-radius: 16px;
  cursor: pointer;
  margin-right: 12px;
  transition: 0.3s;
  font-weight: 600;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray['747474']};
  }
`;
