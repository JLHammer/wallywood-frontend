import type { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

type HeaderProps = {
  children?: ReactNode;
};

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: ${theme.zIndices.header};
  background-color: ${theme.colors.white};
  height: ${theme.mobile.sizes.headerHeight};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: ${theme.borders.width} solid ${theme.colors.bordeaux};

  ${theme.media.tablet} {
    margin-bottom: ${theme.mobile.spacing.s};
  }
`;

export const Header = ({ children }: HeaderProps) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};
