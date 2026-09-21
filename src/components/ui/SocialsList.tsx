import styled from "styled-components";
import { theme } from "../../styles/theme";
import { socials } from "../../data/socials";

const SocialsListStyled = styled.ul`
  display: flex;
  gap: ${theme.mobile.spacing.l};
  color: ${theme.colors.socialIcon};

  svg {
    width: ${theme.mobile.sizes.socialIcon};
    height: ${theme.mobile.sizes.socialIcon};
    transition: 0.2s ease;
  }

  ${theme.media.tablet} {
    gap: ${theme.tablet.spacing.l};

    svg {
      width: ${theme.tablet.sizes.socialIcon};
      height: ${theme.tablet.sizes.socialIcon};
    }
  }

  ${theme.media.desktop} {
    align-self: start;
    gap: ${theme.desktop.spacing.xs};
    margin-top: ${theme.desktop.spacing.xs};

    svg {
      width: ${theme.desktop.sizes.socialIcon};
      height: ${theme.desktop.sizes.socialIcon};
    }
  }
`;

export const SocialsList = () => {
  return (
    <SocialsListStyled>
      {socials.map(({ name, href, Icon }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon />
          </a>
        </li>
      ))}
    </SocialsListStyled>
  );
};
