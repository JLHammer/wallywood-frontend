import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import type { Poster } from "../../../types";
import { PosterFrame } from "./PosterFrame";
import { PosterImage } from "./PosterImage";
import { ReadMoreButton } from "../button/ReadMoreButton";
import { LikeButton } from "../button/LikeButton";
import { posterPath } from "../../../data/routes";

const LikedPostersCardStyled = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.mobile.spacing.l};
  padding: ${theme.mobile.spacing.xs};
`;

const ImageLink = styled(Link)`
  display: block;
  width: 100%;
  aspect-ratio: 7 / 10;
  flex-shrink: 0;

  ${theme.media.desktop} {
    height: ${theme.desktop.sizes.listCardImageHeight};
    aspect-ratio: auto;
  }
`;

const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.s};
  padding: 0 ${theme.mobile.spacing.s};
  text-align: center;
`;

const Title = styled.h3`
  font-size: ${theme.mobile.fontSizes.cardTitle};

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.listCardTitle};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.mobile.spacing.s};
`;

interface LikedPostersCardProps {
  poster: Poster;
}

export const LikedPostersCard = ({ poster }: LikedPostersCardProps) => {
  return (
    <LikedPostersCardStyled>
      <ImageLink to={posterPath(poster.slug)}>
        <PosterFrame>
          <PosterImage src={poster.imageUrl} alt={poster.name} />
        </PosterFrame>
      </ImageLink>
      <CardContent>
        <Title>{poster.name}</Title>
        <ButtonGroup>
          <ReadMoreButton to={posterPath(poster.slug)} />
          <LikeButton posterId={poster.id} size="iconLarge" />
        </ButtonGroup>
      </CardContent>
    </LikedPostersCardStyled>
  );
};
