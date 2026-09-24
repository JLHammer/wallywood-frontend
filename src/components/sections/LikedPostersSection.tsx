import { theme } from "../../styles/theme";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useLikedPosters } from "../../hooks/useLikedPosters";
import { ROUTES } from "../../data/routes";
import { Loader } from "../ui/Loader";
import { ButtonLink } from "../ui/button/ButtonLink";
import { LikedPostersCard } from "../ui/poster/LikedPostersCard";

const LikedPostersSectionStyled = styled.section``;

const LikedPostersList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.mobile.spacing.xl};

  ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);

    li:only-child {
      grid-column: 1 / -1;
      justify-self: center;
      width: calc((100% - ${theme.mobile.spacing.xl}) / 2);
    }
  }

  ${theme.media.desktop} {
    grid-template-columns: repeat(3, ${theme.desktop.sizes.listCardWidth});
    column-gap: ${theme.desktop.spacing.xxl};

    li:only-child {
      grid-column: auto;
      justify-self: stretch;
      width: auto;
    }
  }
`;

export const LikedPostersSection = () => {
  const { user, isLoading: isAuthLoading } = useAuth();
  const { data, error, isLoading } = useLikedPosters();
  const location = useLocation();

  const renderPosters = () => {
    if (isAuthLoading) return <Loader />;
    if (!user) {
      return (
        <>
          <p>Log ind for at se de plakater, du har liket.</p>
          <ButtonLink to={ROUTES.login} state={{ from: location.pathname }}>
            Login
          </ButtonLink>
        </>
      );
    }
    if (isLoading) return <Loader />;
    if (error || !data) return <p>Kunne ikke hente plakater</p>;
    if (data.likes.length === 0)
      return <p>Du har ikke liket nogen plakater endnu</p>;

    return (
      <LikedPostersList>
        {data.likes.map(({ poster }) => (
          <li key={poster.id}>
            <LikedPostersCard poster={poster} />
          </li>
        ))}
      </LikedPostersList>
    );
  };

  return (
    <LikedPostersSectionStyled>
      <h1>Favoritter</h1>
      {renderPosters()}
    </LikedPostersSectionStyled>
  );
};
