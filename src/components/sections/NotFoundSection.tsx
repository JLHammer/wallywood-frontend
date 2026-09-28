import styled from "styled-components";
import { ROUTES } from "../../router/routes";
import { Button } from "../ui/button/Button";

const NotFoundMessage = styled.p`
  text-align: center;
`;

export const NotFoundSection = () => {
  return (
    <section>
      <h1>Siden findes ikke</h1>
      <NotFoundMessage>
        Vi kunne ikke finde den side du leder efter
      </NotFoundMessage>
      <Button to={ROUTES.home} size="large">
        Til forsiden
      </Button>
    </section>
  );
};
