import styled from "styled-components";
import { theme } from "../../../styles/theme";
import type { Poster } from "../../../types";
import { formatPrice, toParagraphs } from "../../../utils/text";
import { PosterFrame } from "./PosterFrame";
import { PosterImage } from "./PosterImage";
import { PutInCartButton } from "../button/PutInCartButton";
import { LikeButton } from "../button/LikeButton";

const PostersDetailsCardStyled = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.mobile.spacing.l};
  padding: ${theme.mobile.spacing.xs};

  ${theme.media.desktop} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 7 / 10;
  flex-shrink: 0;

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.detailsImageWidth};
    height: ${theme.desktop.sizes.detailsImageHeight};
    aspect-ratio: auto;
    margin-top: ${theme.desktop.sizes.detailsImageOffset};
  }
`;

const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.s};
  padding: 0 ${theme.mobile.spacing.s};

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.detailsTextWidth};
    gap: ${theme.desktop.spacing.l};
    padding: 0;
    font-size: ${theme.desktop.fontSizes.content};
  }
`;

const Title = styled.h2`
  font-family: ${theme.fonts.body};
  font-size: ${theme.mobile.fontSizes.cardTitle};
  color: ${theme.colors.black};
  text-align: center;

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.contentTitle};
    text-align: left;
  }
`;

const Price = styled.p`
  font-size: ${theme.mobile.fontSizes.cardTitle};
  font-weight: ${theme.fontWeights.bold};
  text-align: center;

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.contentTitle};
    text-align: left;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.mobile.spacing.s};

  ${theme.media.desktop} {
    justify-content: flex-start;
    gap: ${theme.desktop.spacing.m};
  }
`;

interface PostersDetailsCardProps {
  poster: Poster;
}

export const PostersDetailsCard = ({ poster }: PostersDetailsCardProps) => {
  return (
    <PostersDetailsCardStyled>
      <ImageWrapper>
        <PosterFrame>
          <PosterImage src={poster.imageUrl} alt={poster.name} />
        </PosterFrame>
      </ImageWrapper>
      <CardContent>
        <Title>{poster.name}</Title>
        {toParagraphs(poster.description).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p>
          Størrelse: {poster.width} x {poster.height} cm
        </p>
        <p>Varenummer (SKU): {poster.id}</p>
        <Price>Pris: {formatPrice(poster.price)} DKK</Price>
        <ButtonGroup>
          <PutInCartButton poster={poster} />
          <LikeButton posterId={poster.id} />
        </ButtonGroup>
      </CardContent>
    </PostersDetailsCardStyled>
  );
};
