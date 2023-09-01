import { styled } from 'styled-components';

const S = {
  footer: styled.footer`
    ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
    padding: 40px 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray.eaeaea};
  `,
  copyright: styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray['747474']};
    text-align: center;
    width: 100%;
  `,
};

export const Footer = () => {
  return (
    <S.footer>
      <S.copyright>Copyright 2023 @seungdeok. All rights reserved.</S.copyright>
    </S.footer>
  );
};
