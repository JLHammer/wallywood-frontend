import styled from "styled-components";
import { theme } from "../../styles/theme";
import { ChangePasswordForm } from "../ui/form/ChangePasswordForm";

const ChangePasswordSectionStyled = styled.section`
  ${theme.media.desktop} {
    align-items: flex-start;
    padding: 0;
  }
`;

export const ChangePasswordSection = () => {
  return (
    <ChangePasswordSectionStyled>
      <h1>Skift kodeord</h1>
      <ChangePasswordForm />
    </ChangePasswordSectionStyled>
  );
};
