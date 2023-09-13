import { styled } from 'styled-components';

export const adminHeader = styled.header`
${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
width: 100%;
height: 80px;
padding: 0 16px;

img {
  border-radius: 50%;
}
`;

export const adminLinks = styled.ul`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')}
  height: 100%;

  li {
    padding: 8px 8px;
    color: ${({ theme }) => theme.colors.gray['747474']};
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const adminAction = styled.button`
font-size: 16px;
`;

export const header = styled.header`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
  width: 100%;
  height: 52px;
  padding: 0 16px;
`;

export const logo = styled.div`
  img {
    border-radius: 50%;
  }

  a {
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')}
    height: 44px;      

    div {
      font-size: 16px;
      font-weight: bold;
      margin-left: 8px;
      color: ${({ theme }) => theme.colors.text['222222']};
    }
  }
`;

export const link = styled.div`
  width: 44px;
  height: 44px;
  
  a {
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')}
    width: 100%;
    height: 100%;
  }

  svg {
    width: 36px;
    height: 36px;
    fill: black;
  }
`;
