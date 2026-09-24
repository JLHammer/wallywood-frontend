import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import type { Poster } from "../../../types";
import { toParagraphs } from "../../../utils/text";
import { PosterFrame } from "./PosterFrame";
import { PosterImage } from "./PosterImage";
import { ReadMoreButton } from "../button/ReadMoreButton";
import { ButtonLink } from "../button/ButtonLink";
import { LikeButton } from "../button/LikeButton";
import { posterPath } from "../../../data/routes";

const RandomPosterCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.mobile.spacing.l};
  padding: ${theme.mobile.spacing.xs};

  ${theme.media.tablet} {
    max-width: ${theme.tablet.sizes.frontpageCardWidth};
    min-height: ${theme.tablet.sizes.frontpageCardHeight};
    flex-direction: row;
    align-items: stretch;
  }

  ${theme.media.desktop} {
    max-width: ${theme.desktop.sizes.frontpageCardWidth};
    min-height: ${theme.desktop.sizes.frontpageCardHeight};
    height: ${theme.desktop.sizes.frontpageCardHeight};
    padding: 0;
  }
`;

const ImageLink = styled(Link)`
  display: block;
  width: ${theme.mobile.sizes.frontpageCardImageWidth};
  aspect-ratio: 7 / 10;
  flex-shrink: 0;

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.frontpageCardImageWidth};
    aspect-ratio: auto;
    align-self: stretch;
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.frontpageCardImageWidth};
  }
`;

const CardContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.s};
  padding: 0 ${theme.mobile.spacing.s};

  ${theme.media.desktop} {
    padding: 0;
    font-size: ${theme.desktop.fontSizes.frontpageCardText};
  }
`;

const Title = styled.h3`
  font-size: ${theme.mobile.fontSizes.cardTitle};
  text-align: center;

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.frontpageCardTitle};
    text-align: left;
  }
`;

const Description = styled.div`
  ${theme.media.tablet} {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${theme.tablet.lineClamps.frontpageCardText};
    overflow: hidden;
  }

  ${theme.media.desktop} {
    -webkit-line-clamp: ${theme.desktop.lineClamps.frontpageCardText};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.mobile.spacing.s};

  ${theme.media.tablet} {
    margin-top: auto;

    ${ButtonLink} {
      width: ${theme.tablet.sizes.formButtonWidth};
      height: ${theme.tablet.sizes.formButtonHeight};
      font-size: ${theme.tablet.fontSizes.formText};
    }

    & > button {
      width: ${theme.tablet.sizes.formButtonHeight};
      height: ${theme.tablet.sizes.formButtonHeight};
      font-size: ${theme.tablet.fontSizes.formText};
    }
  }

  ${theme.media.desktop} {
    justify-content: flex-start;

    ${ButtonLink} {
      width: ${theme.desktop.sizes.buttonWidth};
      height: ${theme.desktop.sizes.buttonHeight};
      font-size: ${theme.desktop.fontSizes.formText};
    }

    & > button {
      width: ${theme.desktop.sizes.likeButtonWidth};
      height: ${theme.desktop.sizes.likeButtonHeight};
      font-size: inherit;
    }
  }
`;

interface RandomPostersCardProps {
  poster: Poster;
}

export const RandomPostersCard = ({ poster }: RandomPostersCardProps) => {
  return (
    <RandomPosterCardStyled>
      <ImageLink to={posterPath(poster.slug)}>
        <PosterFrame>
          <PosterImage src={poster.imageUrl} alt={poster.name} />
        </PosterFrame>
      </ImageLink>
      <CardContent>
        <Title>{poster.name}</Title>
        <Description>
          {toParagraphs(poster.description).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Description>
        <p>
          Genre:{" "}
          {poster.genres.length > 0
            ? poster.genres.map((genre) => genre.title).join(", ")
            : "Ingen"}
        </p>
        <ButtonGroup>
          <ReadMoreButton to={posterPath(poster.slug)} />
          <LikeButton posterId={poster.id} />
        </ButtonGroup>
      </CardContent>
    </RandomPosterCardStyled>
  );
};
