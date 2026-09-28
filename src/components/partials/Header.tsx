import styled from "styled-components";
import { theme } from "../../styles/theme";
import { NavBar } from "./NavBar";
import { Logo } from "../ui/header/Logo";
import { Cart } from "../ui/header/Cart";
import { FavoritesLink } from "../ui/header/FavoritesLink";

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

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.tablet.spacing.m};
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <NavBar />
      <HeaderActions>
        <FavoritesLink />
        <Cart />
      </HeaderActions>
    </HeaderStyled>
  );
};
