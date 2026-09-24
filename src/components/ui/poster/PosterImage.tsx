import { useState } from "react";
import styled from "styled-components";

interface PosterImageProps {
  src: string;
  alt: string;
}

const Image = styled.img<{ $isLoaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 0.6s ease;
`;

export const PosterImage = ({ src, alt }: PosterImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt={alt}
      $isLoaded={isLoaded}
      onLoad={() => setIsLoaded(true)}
      onError={() => setIsLoaded(true)}
    />
  );
};
