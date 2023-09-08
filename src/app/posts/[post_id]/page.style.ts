import { styled } from 'styled-components';

export const container = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'flex-start')};
  height: 100%;
  width: 100%;
`;

export const contentWrap = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
  height: 100%;
  width: 100%;
  padding: 20px; 16px;
  width: 768px;
  position: relative;

  ${({ theme }) => theme.media.pc} {
  }

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;

export const heading = styled.h1`
  font-weight: bold;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.text['222222']};
`;

export const subHeadingWrap = styled.div`
  width: 100%;
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')};
  margin-top: 12px;
`;

export const datetime = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray['747474']};
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

export const sideWrap = styled.div`
  left: 100%;
  position: absolute;
`;

export const scrollspyWrap = styled.ul`
  position: fixed;
  top: 72px;
  width: 240px;
  padding-left: 16px;
  border-left: 1px solid ${({ theme }) => theme.colors.gray.eaeaea};
  
  li {
    margin-top: 6px;
    line-height: 2;
    color: ${({ theme }) => theme.colors.text['888888']};
    cursor: pointer;
    font-size: 14px;

    &:hover {
      color: ${({ theme }) => theme.colors.text['222222']};
      transition: .3s;
    }
  }
`;
