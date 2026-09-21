import type { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Header } from "../partials/Header";
import { NavBar } from "../partials/NavBar";
import { Footer } from "../partials/Footer";
import { Logo } from "../ui/header/Logo";

type MainLayoutProps = {
  children?: ReactNode;
  pageTitle?: string;
};

const MainStyled = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${theme.mobile.spacing.xl};
`;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header>
        <Logo />
        <NavBar />
      </Header>
      <MainStyled>{children}</MainStyled>
      <Footer />
    </>
  );
};
