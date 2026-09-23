import styled from "styled-components";
import { theme } from "../../styles/theme";
import { SignupForm } from "../ui/form/SignupForm";

const SignupSectionStyled = styled.section`
  ${theme.media.desktop} {
    align-items: flex-start;
    padding: 0;
  }
`;

export const SignupSection = () => {
  return (
    <SignupSectionStyled>
      <h1>Opret profil</h1>
      <SignupForm />
    </SignupSectionStyled>
  );
};
