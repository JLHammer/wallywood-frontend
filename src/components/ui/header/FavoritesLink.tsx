import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { ROUTES } from "../../../data/routes";
import { useAuth } from "../../../hooks/useAuth";

const FavoritesLinkStyled = styled(NavLink)`
  display: none;
  transition: color 0.2s ease;

  svg {
    width: ${theme.tablet.sizes.headerIconSize};
    height: ${theme.tablet.sizes.headerIconSize};
  }

  &:hover {
    color: ${theme.colors.orange};
  }

  ${theme.media.tablet} {
    display: flex;
  }

  ${theme.media.desktop} {
    display: none;
  }
`;

export const FavoritesLink = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <FavoritesLinkStyled to={ROUTES.likedPosters} title="Favoritter">
      <FaHeart />
    </FavoritesLinkStyled>
  );
};
