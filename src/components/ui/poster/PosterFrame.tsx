import type { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface PosterFrameProps {
  children: ReactNode;
  matWidth?: string;
  glareTop?: string;
}

const PosterFrameStyled = styled.div<{ $matWidth: string; $glareTop: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${({ $matWidth }) => $matWidth};
  overflow: hidden;
  border: ${theme.frame.width} solid;
  border-color: ${theme.frame.borderTop} ${theme.frame.borderSide}
    ${theme.frame.borderBottom} ${theme.frame.borderSide};
  background-image: linear-gradient(
    ${theme.frame.matLight},
    ${theme.frame.matDark}
  );
  box-shadow: ${theme.frame.shadow};

  &::before {
    content: "";
    position: absolute;
    top: ${({ $glareTop }) => $glareTop};
    right: -20%;
    width: 73%;
    aspect-ratio: 1;
    transform: rotate(-40deg);
    background-image: linear-gradient(${theme.frame.glare}, transparent 70%);
    pointer-events: none;
  }
`;

const Poster = styled.div`
  width: 100%;
  height: 100%;
  border: ${theme.frame.edgeWidth} solid;
  border-color: ${theme.frame.edgeTop} ${theme.frame.edgeSide}
    ${theme.frame.matLight} ${theme.frame.edgeSide};
  box-shadow: ${theme.frame.edgeShadow};
`;

export const PosterFrame = ({
  children,
  matWidth = theme.frame.matWidth,
  glareTop = theme.frame.glareTop,
}: PosterFrameProps) => {
  return (
    <PosterFrameStyled $matWidth={matWidth} $glareTop={glareTop}>
      <Poster>{children}</Poster>
    </PosterFrameStyled>
  );
};
