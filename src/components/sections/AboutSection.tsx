import styled from "styled-components";
import { theme } from "../../styles/theme";
import { ABOUT_NOTE, ABOUT_PARAGRAPHS } from "../../data/about";
import star from "../../assets/images/star.jpg";
import { PosterFrame } from "../ui/poster/PosterFrame";

const AboutSectionStyled = styled.section``;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.mobile.spacing.l};
  padding: ${theme.mobile.spacing.xs};

  ${theme.media.desktop} {
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const AboutImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  flex-shrink: 0;

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.aboutImageSize};
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.aboutImageSize};
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AboutText = styled.div`
  max-width: ${theme.mobile.sizes.aboutTextWidth};
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.l};
  font-size: ${theme.mobile.fontSizes.body};
`;

export const AboutSection = () => {
  return (
    <AboutSectionStyled>
      <h1>Om os</h1>
      <AboutContent>
        <AboutImageWrapper>
          <PosterFrame
            matWidth={theme.frame.matWidthSmall}
            glareTop={theme.frame.glareTopSquare}
          >
            <AboutImage src={star} alt="" />
          </PosterFrame>
        </AboutImageWrapper>
        <AboutText>
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p>
            <strong>OBS:</strong> {ABOUT_NOTE}
          </p>
        </AboutText>
      </AboutContent>
    </AboutSectionStyled>
  );
};
