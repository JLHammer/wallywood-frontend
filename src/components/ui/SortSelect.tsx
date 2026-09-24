import type { ChangeEvent } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { SORT_OPTIONS, getSortOption } from "../../data/sortOptions";
import { theme } from "../../styles/theme";
import { Select } from "./form/Select";
import { SelectField } from "./form/SelectField";
import { HiddenLabel } from "./form/HiddenLabel";

const SortSelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.xxs};
`;

const SortHeading = styled.h2`
  text-align: center;
  color: ${theme.colors.black};

  ${theme.media.desktop} {
    display: none;
  }
`;

export const SortSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ sort: event.target.value });
  };

  return (
    <SortSelectStyled>
      <SortHeading>Sorter</SortHeading>
      <SelectField>
        <HiddenLabel htmlFor="sort-select">Sorter efter</HiddenLabel>
        <Select
          id="sort-select"
          value={getSortOption(searchParams.get("sort")).value}
          onChange={handleSortChange}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </SelectField>
    </SortSelectStyled>
  );
};
