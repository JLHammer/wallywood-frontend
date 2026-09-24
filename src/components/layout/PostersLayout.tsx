import type { ReactNode } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { GenreNav } from "../ui/GenreNav";

const PostersLayoutStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: ${theme.mobile.spacing.m};

  ${theme.media.tablet} {
    grid-template-columns:
      1fr ${theme.tablet.sizes.listCardImageWidth}
      1fr ${theme.tablet.sizes.listCardImageWidth}
      1fr;
    column-gap: 0;
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.layout.contentWidth};
    display: grid;
    grid-template-columns: ${theme.desktop.layout.sidebarWidth} 1fr;
    column-gap: ${theme.desktop.spacing.xxl};
    row-gap: ${theme.desktop.spacing.l};
    align-items: stretch;
    padding: 0;
  }
`;

const PageHeader = styled.div`
  display: contents;

  h1 {
    grid-column: 1 / -1;
    justify-self: center;
  }

  ${theme.media.desktop} {
    display: flex;
    grid-column: 1 / -1;
    justify-content: space-between;
    align-items: center;
  }
`;

const filterGroupStyles = css`
  grid-row: 2;
  width: min(
    100% - ${theme.mobile.spacing.xs},
    ${theme.mobile.sizes.selectWidth}
  );

  ${theme.media.tablet} {
    justify-self: stretch;
    width: auto;
    margin-inline: 0;
  }

  ${theme.media.desktop} {
    width: auto;
  }
`;

const HeaderAction = styled.div`
  grid-column: 2;
  justify-self: start;
  margin-right: ${theme.mobile.spacing.xs};
  ${filterGroupStyles}

  ${theme.media.tablet} {
    grid-column: 4;
  }
`;

const Sidebar = styled.div<{ $hideBelowDesktop: boolean }>`
  display: ${({ $hideBelowDesktop }) => ($hideBelowDesktop ? "none" : "block")};
  grid-column: 1;
  justify-self: end;
  margin-left: ${theme.mobile.spacing.xs};
  ${filterGroupStyles}

  ${theme.media.tablet} {
    grid-column: 2;
  }

  ${theme.media.desktop} {
    display: block;
    grid-column: 1;
    justify-self: stretch;
    min-height: ${theme.desktop.sizes.sidebarMinHeight};
    border-right: ${theme.borders.width} solid ${theme.colors.bordeaux};
  }
`;

const Content = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.mobile.spacing.m};

  ${theme.media.desktop} {
    grid-column: 2;
    align-items: stretch;
    gap: ${theme.desktop.spacing.xl};
  }
`;

interface PostersLayoutProps {
  headerAction?: ReactNode;
  hideFiltersBelowDesktop?: boolean;
  children: ReactNode;
}

export const PostersLayout = ({
  headerAction,
  hideFiltersBelowDesktop = false,
  children,
}: PostersLayoutProps) => {
  return (
    <PostersLayoutStyled>
      <PageHeader>
        <h1>Plakater</h1>
        {headerAction && <HeaderAction>{headerAction}</HeaderAction>}
      </PageHeader>
      <Sidebar $hideBelowDesktop={hideFiltersBelowDesktop}>
        <GenreNav />
      </Sidebar>
      <Content>{children}</Content>
    </PostersLayoutStyled>
  );
};
