import styled from "styled-components";
import { theme } from "../../styles/theme";
import { ContactForm } from "../ui/form/ContactForm";

const ContactSectionStyled = styled.section`
  ${theme.media.desktop} {
    width: ${theme.desktop.layout.contentWidth};
    align-items: flex-start;
    padding: 0;
  }
`;

export const ContactSection = () => {
  return (
    <ContactSectionStyled>
      <h1>Kontakt os</h1>
      <ContactForm />
    </ContactSectionStyled>
  );
};
