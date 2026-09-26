import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import type { Poster } from "../../../types";
import { PosterFrame } from "./PosterFrame";
import { PosterImage } from "./PosterImage";
import { PutInCartButton } from "../button/PutInCartButton";
import { LikeButton } from "../button/LikeButton";
import { posterPath } from "../../../data/routes";
import { formatPrice } from "../../../utils/text";

const PostersListCardStyled = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.mobile.spacing.l};
  padding: ${theme.mobile.spacing.xs};

  ${theme.media.tablet} {
    height: 100%;
    padding-inline: 0;
  }

  ${theme.media.desktop} {
    gap: ${theme.desktop.spacing.xs};
    padding: 0;
  }
`;

const ImageLink = styled(Link)`
  display: block;
  width: 100%;
  aspect-ratio: 7 / 10;
  flex-shrink: 0;

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.listCardImageWidth};
  }

  ${theme.media.desktop} {
    width: 100%;
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

  ${theme.media.tablet} {
    flex-grow: 1;
  }

  ${theme.media.desktop} {
    gap: 0;
    padding: 0;
    font-size: ${theme.desktop.fontSizes.content};
  }
`;

const Title = styled.h3`
  font-size: ${theme.mobile.fontSizes.cardTitle};

  ${theme.media.tablet} {
    font-size: ${theme.tablet.fontSizes.listCardTitle};
  }

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.listCardTitle};
  }
`;

const Price = styled.p`
  ${theme.media.tablet} {
    margin-top: auto;
    font-size: ${theme.tablet.fontSizes.listCardPrice};
  }

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.listCardPrice};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.mobile.spacing.s};

  ${theme.media.desktop} {
    gap: ${theme.desktop.spacing.xxs};
    padding-top: ${theme.desktop.spacing.xs};
  }
`;

interface PostersListCardProps {
  poster: Poster;
}

export const PostersListCard = ({ poster }: PostersListCardProps) => {
  return (
    <PostersListCardStyled>
      <ImageLink to={posterPath(poster.slug)}>
        <PosterFrame>
          <PosterImage src={poster.imageUrl} alt={poster.name} />
        </PosterFrame>
      </ImageLink>
      <CardContent>
        <Title>{poster.name}</Title>
        <Price>Kr. {formatPrice(poster.price)}</Price>
        <ButtonGroup>
          <PutInCartButton poster={poster} size="large" />
          <LikeButton posterId={poster.id} size="iconLarge" />
        </ButtonGroup>
      </CardContent>
    </PostersListCardStyled>
  );
};
