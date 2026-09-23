import styled from "styled-components";
import { theme } from "../../styles/theme";
import { LoginForm } from "../ui/form/LoginForm";
import { LargeButton } from "../ui/button/LargeButton";
import { useAuth } from "../../hooks/useAuth";

const LoginSectionStyled = styled.section`
  ${theme.media.desktop} {
    width: ${theme.desktop.layout.contentWidth};
    align-items: flex-start;
    padding: 0;
  }
`;

const LoggedInText = styled.p`
  ${theme.media.tablet} {
    font-size: ${theme.tablet.fontSizes.formText};
  }

  ${theme.media.desktop} {
    font-size: ${theme.desktop.fontSizes.body};
  }
`;

export const LoginSection = () => {
  const { user, logout } = useAuth();

  return (
    <LoginSectionStyled>
      <h1>Login</h1>
      {user ? (
        <>
          <LoggedInText>Du er logget ind som {user.firstName}.</LoggedInText>
          <LargeButton type="button" onClick={logout}>
            Log ud
          </LargeButton>
        </>
      ) : (
        <LoginForm />
      )}
    </LoginSectionStyled>
  );
};
