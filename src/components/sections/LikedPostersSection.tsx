import { theme } from "../../styles/theme";
import styled from "styled-components";
import { useLikedPosters } from "../../hooks/useLikedPosters";
import { ROUTES } from "../../router/routes";
import { Loader } from "../ui/Loader";
import { Button } from "../ui/button/Button";
import { LikedPostersCard } from "../ui/poster/LikedPostersCard";

const LikedPostersList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.mobile.spacing.xl};

  ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${theme.media.desktop} {
    grid-template-columns: repeat(3, ${theme.desktop.sizes.listCardWidth});
    column-gap: ${theme.desktop.spacing.xxl};
  }
`;

const LikedPostersItem = styled.li`
  ${theme.media.tablet} {
    &:only-child {
      grid-column: 1 / -1;
      justify-self: center;
      width: calc((100% - ${theme.mobile.spacing.xl}) / 2);
    }
  }

  ${theme.media.desktop} {
    &:only-child {
      grid-column: auto;
      justify-self: stretch;
      width: auto;
    }
  }
`;

export const LikedPostersSection = () => {
  const { posters, error, isLoading } = useLikedPosters();

  const renderPosters = () => {
    if (isLoading) return <Loader />;
    if (error) return <p>Kunne ikke hente plakater</p>;
    if (posters.length === 0)
      return (
        <>
          <p>Du har ikke liket nogen plakater endnu</p>
          <Button to={ROUTES.posters} size="large">
            Se plakater
          </Button>
        </>
      );

    return (
      <LikedPostersList>
        {posters.map((poster) => (
          <LikedPostersItem key={poster.id}>
            <LikedPostersCard poster={poster} />
          </LikedPostersItem>
        ))}
      </LikedPostersList>
    );
  };

  return (
    <section>
      <h1>Favoritter</h1>
      {renderPosters()}
    </section>
  );
};
