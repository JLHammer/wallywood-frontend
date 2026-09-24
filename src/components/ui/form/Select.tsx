import type { ChangeEvent, ReactNode } from "react";
import styled from "styled-components";
import { LuChevronDown } from "react-icons/lu";
import { theme } from "../../../styles/theme";

const SelectWrapper = styled.span`
  position: relative;
  width: 100%;
  max-width: ${theme.mobile.sizes.selectWidth};

  ${theme.media.tablet} {
    max-width: none;
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.selectWidth};
  }
`;

const SelectChevron = styled(LuChevronDown)`
  position: absolute;
  top: 50%;
  right: ${theme.mobile.spacing.xs};
  width: ${theme.mobile.sizes.selectChevronSize};
  height: ${theme.mobile.sizes.selectChevronSize};
  transform: translateY(-50%);
  pointer-events: none;
  transition: color 0.2s ease;

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.selectChevronSize};
    height: ${theme.tablet.sizes.selectChevronSize};
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.selectChevronSize};
    height: ${theme.desktop.sizes.selectChevronSize};
  }

  ${SelectWrapper}:hover & {
    color: ${theme.colors.orange};
  }
`;

const SelectStyled = styled.select`
  appearance: none;
  width: 100%;
  height: ${theme.mobile.sizes.selectHeight};
  padding: 0 ${theme.mobile.spacing.xl} 0 ${theme.mobile.spacing.m};
  font-family: ${theme.fonts.select};
  color: ${theme.colors.black};
  background-color: ${theme.colors.inputBackground};
  border: ${theme.borders.width} solid ${theme.colors.buttonSkin};
  border-radius: ${theme.radii.input};

  &:focus-visible {
    outline: ${theme.outlines.width} solid ${theme.colors.buttonSkin};
  }

  ${theme.media.tablet} {
    height: ${theme.tablet.sizes.selectHeight};
    padding-right: ${theme.tablet.spacing.xxl};
    font-size: ${theme.tablet.fontSizes.formText};
  }

  ${theme.media.desktop} {
    height: ${theme.desktop.sizes.selectHeight};
    padding-right: ${theme.desktop.spacing.xl};
    padding-left: ${theme.desktop.spacing.xs};
    font-size: ${theme.desktop.fontSizes.content};
    border: none;
    border-top: ${theme.borders.width} solid ${theme.colors.buttonSkin};
    border-radius: 0;
    box-shadow: ${theme.shadows.inputInset};
  }
`;

interface SelectProps {
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
}

export const Select = ({ id, value, onChange, children }: SelectProps) => {
  return (
    <SelectWrapper>
      <SelectStyled id={id} value={value} onChange={onChange}>
        {children}
      </SelectStyled>
      <SelectChevron />
    </SelectWrapper>
  );
};
