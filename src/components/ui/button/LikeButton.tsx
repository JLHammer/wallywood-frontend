import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { useAuth } from "../../../hooks/useAuth";
import { useLikes } from "../../../hooks/useLikes";
import { ROUTES } from "../../../data/routes";
import { Button } from "./Button";
import type { ButtonSize } from "./buttonStyles";

const FilledHeart = styled(FaHeart)<{ $isLiked: boolean }>`
  position: absolute;
  opacity: ${({ $isLiked }) => ($isLiked ? 1 : 0)};
  transition: opacity 0.2s ease-out;
`;

const LikeButtonStyled = styled(Button)`
  position: relative;

  ${theme.media.hover} {
    &:hover:not(:disabled) ${FilledHeart} {
      opacity: 1;
    }
  }
`;

interface LikeButtonProps {
  posterId: number;
  size?: Extract<ButtonSize, "icon" | "iconLarge">;
}

export const LikeButton = ({ posterId, size = "icon" }: LikeButtonProps) => {
  const { user } = useAuth();
  const { isLiked, toggleLike } = useLikes();
  const navigate = useNavigate();
  const location = useLocation();
  const [isPending, setIsPending] = useState(false);
  const liked = isLiked(posterId);

  const handleClick = async () => {
    if (!user) {
      navigate(ROUTES.login, {
        state: {
          from: location.pathname + location.search,
          likePosterId: posterId,
        },
      });
      return;
    }

    setIsPending(true);
    await toggleLike(posterId);
    setIsPending(false);
  };

  return (
    <LikeButtonStyled
      size={size}
      title={liked ? "Fjern like" : "Like plakaten"}
      onClick={handleClick}
      disabled={isPending}
    >
      <FaRegHeart />
      <FilledHeart $isLiked={liked} />
    </LikeButtonStyled>
  );
};
