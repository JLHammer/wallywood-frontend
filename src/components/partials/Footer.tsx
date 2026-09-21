import styled from "styled-components";
import { theme } from "../../styles/theme";
import { SocialsList } from "../ui/SocialsList";

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.mobile.spacing.l};
  padding: ${theme.mobile.spacing.xl} 0;
  font-size: ${theme.mobile.fontSizes.footerText};
  border-top: ${theme.borders.width} solid ${theme.colors.bordeaux};

  ${theme.media.tablet} {
    gap: ${theme.tablet.spacing.l};
    font-size: ${theme.tablet.fontSizes.footerText};
  }

  ${theme.media.desktop} {
    flex-direction: row;
    font-size: ${theme.desktop.fontSizes.footerText};
    align-items: start;
    gap: 0;
    height: ${theme.desktop.sizes.footerHeight};
    margin: ${theme.desktop.sizes.footerTopOffset} 0 0;
    border-top: ${theme.borders.width} solid ${theme.colors.bordeaux};
  }
`;

const FooterColumns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
  gap: ${theme.mobile.spacing.l};

  ${theme.media.tablet} {
    gap: ${theme.tablet.spacing.xxxl};
  }

  ${theme.media.desktop} {
    display: grid;
    grid-template-columns: ${theme.desktop.sizes.footerColumnWidth} auto;
    gap: 0;
  }
`;

const H2 = styled.h2`
  margin-bottom: ${theme.mobile.spacing.xxs};
  font-size: ${theme.mobile.fontSizes.footerLogo};
  color: ${theme.colors.orange};
  text-transform: uppercase;

  ${theme.media.tablet} {
    margin-bottom: 0;
    font-size: ${theme.tablet.fontSizes.footerLogo};
  }

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.footerLogo};
  }
`;

const Address = styled.address`
  font-style: normal;
`;

const ParagraphCentered = styled.p`
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterColumns>
        <div>
          <H2>Wallywood</H2>
          <Address>
            <ParagraphCentered>Øster Uttrupvej 1</ParagraphCentered>
            <ParagraphCentered>9000 Aalborg</ParagraphCentered>
          </Address>
        </div>
        <Address>
          <p>CVR: 12345678</p>
          <p>MAIL: info@wallywood.dk</p>
          <p>MOBIL: +45 9812 3456</p>
        </Address>
      </FooterColumns>
      <SocialsList />
    </FooterStyled>
  );
};
