import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Button } from "./button/Button";

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
            {typeof n === "number" && (
              <Button
                to={pageSearch(n)}
                size="square"
                isActive={n === page}
                aria-current={n === page ? "page" : undefined}
              >
                {n}
              </Button>
            )}
          </li>
        ))}
      </PaginationList>
    </nav>
  );
};
