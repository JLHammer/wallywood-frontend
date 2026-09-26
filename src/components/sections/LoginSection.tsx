import styled from "styled-components";
import { theme } from "../../styles/theme";
import { LoginForm } from "../ui/form/LoginForm";
import { Button } from "../ui/button/Button";
import { useAuth } from "../../hooks/useAuth";
import { PageTitle } from "../ui/PageTitle";

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
      <PageTitle title={user ? "Profil" : "Login"} />
      <h1>{user ? "Profil" : "Login"}</h1>
      {user ? (
        <>
          <LoggedInText>Du er logget ind som {user.firstName}.</LoggedInText>
          <Button size="large" variant="alert" onClick={logout}>
            Log ud
          </Button>
        </>
      ) : (
        <LoginForm />
      )}
    </LoginSectionStyled>
  );
};
