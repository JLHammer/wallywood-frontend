import styled from "styled-components";
import { theme } from "../../styles/theme";

type DividerProps = {
  width: string;
  marginBlock: string;
};

const DividerStyled = styled.hr<{ $width: string; $marginBlock: string }>`
  width: ${({ $width }) => $width};
  margin: ${({ $marginBlock }) => $marginBlock} auto;
  border-top-width: 1px;
  border-color: ${theme.colors.bordeaux};

  ${theme.media.tablet} {
    display: none;
  }
`;

export const Divider = ({ width, marginBlock }: DividerProps) => {
  return <DividerStyled $width={width} $marginBlock={marginBlock} />;
};
