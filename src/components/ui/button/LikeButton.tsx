import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { useAuth } from "../../../hooks/useAuth";
import { useLikes } from "../../../hooks/useLikes";
import { ROUTES } from "../../../data/routes";

const FilledHeart = styled(FaHeart)<{ $isLiked: boolean }>`
  position: absolute;
  opacity: ${({ $isLiked }) => ($isLiked ? 1 : 0)};
  transition: opacity 0.2s ease-out;
`;

const LikeButtonStyled = styled.button`
  width: ${theme.mobile.sizes.likeButtonWidth};
  height: ${theme.mobile.sizes.likeButtonHeight};
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.buttonSkin};
  border: ${theme.borders.width} solid ${theme.colors.buttonBorder};
  border-radius: ${theme.radii.button};
  transition: 0.2s ease-out;

  ${theme.media.hover} {
    &:hover {
      background-color: ${theme.colors.orange};

      ${FilledHeart} {
        opacity: 1;
      }
    }
  }
`;

interface LikeButtonProps {
  posterId: number;
}

export const LikeButton = ({ posterId }: LikeButtonProps) => {
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
      type="button"
      title={liked ? "Fjern like" : "Like plakaten"}
      onClick={handleClick}
      disabled={isPending}
    >
      <FaRegHeart />
      <FilledHeart $isLiked={liked} />
    </LikeButtonStyled>
  );
};
