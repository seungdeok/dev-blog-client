import { styled } from 'styled-components';

export const container = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'flex-start')};
  height: 100%;
  width: 100%;
`;

export const banner = styled.section`
  height: 400px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'center')};
  position: relative;

  h1, div {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  div {
    margin-top: 16px;
    line-height: 1.6;
    min-width:11px;
    white-space: nowrap;
    margin: 0;
    position: absolute;
    color: transparent;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before {
      content: "Frontend Engineer with an focusing on Javascript, Testing, Automation, Metoring";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: ${({ theme }) => theme.colors.white};
      overflow: hidden;
      border-right: 1px solid ${({ theme }) => theme.colors.white};
      animation: typing 5s steps(31) infinite;
    }

    @keyframes typing{
      0% {
        width: 0%;
      }
      50% {
        width: 100%;
      }
      100% {
        width: 0%;
      }
    }
  }
`;

export const tags = styled.div`
  margin-top: 4px;
  line-heihgt: 1.6;
  color: ${({ theme }) => theme.colors.gray['747474']};
`;

export const links = styled.div`
  margin-top: 4px;

  a {
    svg {
      width: 24px;
      height: 24px;
      fill: black;
    }
  }
`;

export const row = styled.div`
  ${({ theme }) => theme.media.pc} {
    ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'flex-start')};
  }
  width: 100%;
  ${({ theme }) => theme.MIXINS.flexBox('row', 'flex-start', 'center')};
`;

export const mainSection = styled.section`
  width: 66.6%;
  margin-top: 48px;
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};

  ${({ theme }) => theme.media.pc} {
    width: 100%;
  }
  padding: 0 16px;
`;

export const sideSection = styled.section`
  width: 33.3%;
  margin-top: 48px;
  ${({ theme }) => theme.media.pc} {
    margin-left: 0;
    margin-bottom: 48px;
    width: 100%;
  }
  padding: 0 16px;
  ${({ theme }) => theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
`;

export const sectionHeading = styled.h2`
  font-weight: bold;
  font-size: 24px;
`;

export const sectionRowContent = styled.ul`
  flex-wrap: wrap;
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'flex-start')};

  li {
    margin-top: 12px;
  }
`;

export const sectionColContent = styled.ul`
  width: 100%;
  margin-top: 12px;

  a {
    ${({ theme }) =>
      theme.MIXINS.flexBox('column', 'flex-start', 'flex-start')};
    margin: 8px 0;
  }
`;

export const pagination = styled.div`
  width: 100%;
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')};
  margin: 24px 0;
`;
