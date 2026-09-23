import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { buttonStyles } from "./buttonStyles";

export const ButtonLink = styled(Link)`
  ${buttonStyles}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.black};

  &:hover {
    color: ${theme.colors.black};
  }
`;
