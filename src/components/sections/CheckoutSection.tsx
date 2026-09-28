import styled from "styled-components";

const CheckoutMessage = styled.p`
  text-align: center;
`;

export const CheckoutSection = () => {
  return (
    <section>
      <h1>Checkout</h1>
      <CheckoutMessage>
        Denne side er ikke implementeret fordi den ikke var en del af opgaven
      </CheckoutMessage>
    </section>
  );
};
