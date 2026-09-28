import styled from "styled-components";
import curtain from "../../assets/images/curtain.jpg";

const HeroImageStyled = styled.div`
  width: 100%;
  height: 100%;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const HeroImage = () => {
  return (
    <HeroImageStyled>
      <HeroImg src={curtain} alt="Curtain Hero" />
    </HeroImageStyled>
  );
};
