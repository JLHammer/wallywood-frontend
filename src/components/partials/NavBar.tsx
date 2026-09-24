import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { NavLink } from "react-router-dom";
import { NAV_LINKS, ROUTES } from "../../data/routes";
import { BurgerMenu } from "../ui/header/BurgerMenu";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useAuth } from "../../hooks/useAuth";

const NavBarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const NavBarList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.m};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: ${theme.mobile.spacing.s} ${theme.mobile.spacing.l};
  background-color: ${theme.colors.white};
  border-block: ${theme.borders.width} solid ${theme.colors.bordeaux};
  z-index: 1;
  text-align: center;

  ${theme.media.tablet} {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: static;
    width: 100%;
    padding: 0;
    border-bottom: none;
    border-block: none;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  font-size: ${theme.mobile.fontSizes.nav};
  transition: 0.03s ease-out;

  &:hover {
    text-decoration: underline;
    text-underline-offset: ${theme.underlines.offset};
    text-decoration-thickness: ${theme.underlines.thickness};
  }

  &.active {
    color: ${theme.colors.orange};
  }
`;

const FavoritesItem = styled.li`
  ${theme.media.tablet} {
    display: none;
  }

  ${theme.media.desktop} {
    display: list-item;
  }
`;

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const isTabletUp = useMediaQuery(`(min-width: ${theme.breakpoints.tablet})`);

  const closeMenu = () => setIsOpen(false);

  return (
    <NavBarStyled>
      <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />
      <AnimatePresence initial={false}>
        {(isOpen || isTabletUp) && (
          <NavBarList
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
          >
            {NAV_LINKS.map(({ path, label }) => (
              <li key={path}>
                <NavLinkStyled to={path} onClick={closeMenu}>
                  {label}
                </NavLinkStyled>
              </li>
            ))}
            {user && (
              <FavoritesItem>
                <NavLinkStyled to={ROUTES.likedPosters} onClick={closeMenu}>
                  Favoritter
                </NavLinkStyled>
              </FavoritesItem>
            )}
            <li>
              <NavLinkStyled to={ROUTES.login} onClick={closeMenu}>
                {user ? "Logout" : "Login"}
              </NavLinkStyled>
            </li>
          </NavBarList>
        )}
      </AnimatePresence>
    </NavBarStyled>
  );
};
