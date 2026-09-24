import styled from "styled-components";
import { theme } from "../../styles/theme";

const CheckoutSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.m};
`;

const CheckoutMessage = styled.p`
  font-size: ${theme.mobile.fontSizes.body};
  text-align: center;
`;

export const CheckoutSection = () => {
  return (
    <CheckoutSectionStyled>
      <h1>Checkout</h1>
      <CheckoutMessage>
        Denne side er ikke implementeret fordi den ikke var en del af opgaven
      </CheckoutMessage>
    </CheckoutSectionStyled>
  );
};
