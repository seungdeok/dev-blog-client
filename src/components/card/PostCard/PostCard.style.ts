import { styled } from 'styled-components';

export const postCard = styled.li`
  width: 100%;
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray.f9fbfc};
  border: 1px solid ${({ theme }) => theme.colors.gray.f9fbfc};
  
  &:hover {
    transition: all 0.2s ease-out;
    border: 1px solid ${({ theme }) => theme.colors.gray['747474']};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const cardIntro = styled.div`
  width: 100%;
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')};
`;

export const cardHeading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text['222222']};
  ${({ theme }) => theme.MIXINS.textEllipsis(1)};
`;

export const cardDatetime = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray['747474']};
  margin-left: 4px;
  min-width: max-content;
`;

export const cardContent = styled.p`
  line-height: 1.6;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.text['444444']};
  ${({ theme }) => theme.MIXINS.textEllipsis(3)};
`;
