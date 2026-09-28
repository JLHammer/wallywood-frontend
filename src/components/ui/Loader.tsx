import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Loader = () => (
  <LoaderStyled>
    <ClipLoader
      color={theme.colors.orange}
      size={100}
      cssOverride={{ borderWidth: 4 }}
    />
  </LoaderStyled>
);

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.mobile.spacing.m};
`;
