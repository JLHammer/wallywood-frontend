import styled from "styled-components";
import curtain from "../../assets/images/curtain.jpg";

const HeroImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const HeroImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const HeroImage = () => {
  return (
    <HeroImageContainer>
      <HeroImageStyled src={curtain} alt="Curtain Hero" />
    </HeroImageContainer>
  );
};
