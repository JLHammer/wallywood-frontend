import { Link } from "react-router-dom";
import { LuMinus, LuPlus, LuTrash2 } from "react-icons/lu";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { useCart } from "../../../hooks/useCart";
import { posterPath } from "../../../data/routes";
import { formatPrice } from "../../../utils/text";
import type { CartItem } from "../../../types";
import { Button } from "../button/Button";

const CartLineStyled = styled.li`
  display: flex;
  gap: ${theme.mobile.spacing.m};
  padding-bottom: ${theme.mobile.spacing.m};
  border-bottom: ${theme.borders.width} solid ${theme.colors.rosyBeige};

  ${theme.media.tablet} {
    gap: ${theme.mobile.spacing.l};
    padding-bottom: ${theme.mobile.spacing.l};
  }

  ${theme.media.desktop} {
    gap: ${theme.mobile.spacing.m};
    padding-bottom: ${theme.mobile.spacing.m};
  }
`;

const Image = styled.img`
  width: ${theme.mobile.sizes.cartImageWidth};
  aspect-ratio: 7 / 10;
  flex-shrink: 0;
  object-fit: cover;

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.cartImageWidth};
  }

  ${theme.media.desktop} {
    width: ${theme.desktop.sizes.cartImageWidth};
  }
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.xs};
`;

const NameLink = styled(Link)`
  font-weight: ${theme.fontWeights.bold};

  &:hover {
    color: ${theme.colors.orange};
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.mobile.spacing.xs};
  margin-top: auto;

  ${theme.media.tablet} {
    gap: ${theme.mobile.spacing.s};
  }

  ${theme.media.desktop} {
    gap: ${theme.mobile.spacing.xs};
  }
`;

const Quantity = styled.span`
  min-width: ${theme.mobile.sizes.likeButtonWidth};
  text-align: center;

  ${theme.media.tablet} {
    min-width: ${theme.tablet.sizes.formButtonHeight};
  }

  ${theme.media.desktop} {
    min-width: ${theme.desktop.sizes.likeButtonWidth};
  }
`;

const SmallButton = styled(Button)`
  ${theme.media.tablet} {
    font-size: ${theme.tablet.fontSizes.h3};
  }

  ${theme.media.desktop} {
    font-size: inherit;
  }
`;

const RemoveButton = styled(SmallButton)`
  margin-left: auto;
`;

interface CartLineProps {
  item: CartItem;
  onNavigate: () => void;
}

export const CartLine = ({ item, onNavigate }: CartLineProps) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <CartLineStyled>
      <Image src={item.imageUrl} alt={item.name} />
      <Details>
        <NameLink to={posterPath(item.slug)} onClick={onNavigate}>
          {item.name}
        </NameLink>
        <p>{formatPrice(Number(item.price) * item.quantity)} DKK</p>
        <Controls>
          <SmallButton
            size="iconLarge"
            title="Fjern én"
            disabled={item.quantity === 0}
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <LuMinus />
          </SmallButton>
          <Quantity>{item.quantity}</Quantity>
          <SmallButton
            size="iconLarge"
            title="Tilføj én"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <LuPlus />
          </SmallButton>
          <RemoveButton
            size="iconLarge"
            variant="alert"
            title="Fjern fra kurv"
            onClick={() => removeItem(item.id)}
          >
            <LuTrash2 />
          </RemoveButton>
        </Controls>
      </Details>
    </CartLineStyled>
  );
};
