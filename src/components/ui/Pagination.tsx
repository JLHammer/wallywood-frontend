import { Link, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { buttonStyles } from "./button/buttonStyles";

type PaginationProps = {
  page: number;
  totalPages: number;
};

const PaginationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${theme.mobile.spacing.xs};
  margin-top: ${theme.mobile.spacing.xl};
`;

const squareStyles = css`
  ${buttonStyles}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${theme.mobile.sizes.pageSquareSize};
  height: ${theme.mobile.sizes.pageSquareSize};
  color: ${theme.colors.black};

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.pageSquareSize};
    height: ${theme.tablet.sizes.pageSquareSize};
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.pageSquareSize};
    height: ${theme.desktop.sizes.pageSquareSize};
  }
`;

const PageLink = styled(Link)`
  ${squareStyles}

  &:hover {
    color: ${theme.colors.black};
  }
`;

const CurrentPage = styled.span`
  ${squareStyles}
  background-color: ${theme.colors.orange};
`;

const PAGES_AROUND_CURRENT = 2;

const getPageNumbers = (page: number, totalPages: number) => {
  const pages: (number | "…")[] = [];

  for (let n = 1; n <= totalPages; n++) {
    const isVisible =
      n === 1 || n === totalPages || Math.abs(n - page) <= PAGES_AROUND_CURRENT;

    if (isVisible) pages.push(n);
    else if (pages.at(-1) !== "…") pages.push("…");
  }

  return pages;
};

export const Pagination = ({ page, totalPages }: PaginationProps) => {
  const [searchParams] = useSearchParams();

  if (totalPages <= 1) return null;

  const pageSearch = (n: number) => {
    const params = new URLSearchParams(searchParams);
    if (n > 1) params.set("page", String(n));
    else params.delete("page");
    return { search: params.size > 0 ? `?${params}` : "" };
  };

  return (
    <nav>
      <PaginationList>
        {getPageNumbers(page, totalPages).map((n, index) => (
          <li key={n === "…" ? `gap-${index}` : n}>
            {n === "…" && n}
            {n === page && <CurrentPage>{n}</CurrentPage>}
            {typeof n === "number" && n !== page && (
              <PageLink to={pageSearch(n)}>{n}</PageLink>
            )}
          </li>
        ))}
      </PaginationList>
    </nav>
  );
};
