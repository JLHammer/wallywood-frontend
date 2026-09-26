import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { Button } from "../button/Button";
import { CloseButton } from "./CloseButton";
import { CartLine } from "./CartLine";
import { useCart } from "../../../hooks/useCart";
import { useAuth } from "../../../hooks/useAuth";
import { ROUTES } from "../../../data/routes";
import { formatPrice } from "../../../utils/text";

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: ${theme.colors.backdrop};
  z-index: ${theme.zIndices.modal};
`;

const CartAside = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${theme.mobile.sizes.cartModalWidth};
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.l};
  padding: ${theme.mobile.spacing.xl} ${theme.mobile.spacing.l};
  background-color: ${theme.colors.white};
  z-index: ${theme.zIndices.modal};

  ${theme.media.tablet} {
    width: ${theme.tablet.sizes.cartModalWidth};
    gap: ${theme.mobile.spacing.xl};
    padding: ${theme.mobile.spacing.xxl} ${theme.mobile.spacing.xl};
    font-size: ${theme.tablet.fontSizes.formText};
  }

  ${theme.media.desktop} {
    gap: ${theme.mobile.spacing.l};
    padding: ${theme.mobile.spacing.xl} ${theme.mobile.spacing.l};
    font-size: ${theme.desktop.fontSizes.formText};
  }
`;

const CartHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: ${theme.mobile.sizes.closeIconSize};
    height: ${theme.mobile.sizes.closeIconSize};
  }

  ${theme.media.tablet} {
    svg {
      width: ${theme.tablet.sizes.closeIconSize};
      height: ${theme.tablet.sizes.closeIconSize};
    }
  }

  ${theme.media.desktop} {
    svg {
      width: ${theme.desktop.sizes.closeIconSize};
      height: ${theme.desktop.sizes.closeIconSize};
    }
  }
`;

const CartList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.m};
  overflow-y: auto;

  ${theme.media.tablet} {
    gap: ${theme.mobile.spacing.l};
  }

  ${theme.media.desktop} {
    gap: ${theme.mobile.spacing.m};
  }
`;

const EmptyText = styled.p`
  flex: 1;
`;

const Summary = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${theme.mobile.spacing.m};
`;

const Total = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: ${theme.fontWeights.bold};
`;

const Actions = styled.div`
  display: grid;
  grid-template-areas:
    "clear ."
    "shop checkout";
  justify-content: start;
  gap: ${theme.mobile.spacing.s};

  ${theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ClearButton = styled(Button)`
  grid-area: clear;
`;

const ShopButton = styled(Button)`
  grid-area: shop;
`;

const CheckoutButton = styled(Button)`
  grid-area: checkout;
`;

export const CartModal = () => {
  const { items, count, total, clearCart, isOpen, closeCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();

    if (!user) {
      navigate(ROUTES.login, { state: { from: ROUTES.checkout } });
      return;
    }

    navigate(ROUTES.checkout);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Backdrop
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <CartAside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
          >
            <CartHeader>
              <h2>Kurv</h2>
              <CloseButton onClick={closeCart} />
            </CartHeader>
            {items.length === 0 ? (
              <>
                <EmptyText>Din kurv er tom</EmptyText>
                <Button to={ROUTES.posters} size="large" onClick={closeCart}>
                  Se plakater
                </Button>
              </>
            ) : (
              <>
                <CartList>
                  {items.map((item) => (
                    <CartLine
                      key={item.id}
                      item={item}
                      onNavigate={closeCart}
                    />
                  ))}
                </CartList>
                <Summary>
                  <Total>
                    <span>I alt</span>
                    <span>{formatPrice(total)} DKK</span>
                  </Total>
                  <Actions>
                    <ClearButton
                      size="large"
                      variant="alert"
                      onClick={clearCart}
                    >
                      Tøm kurv
                    </ClearButton>
                    <ShopButton size="large" onClick={closeCart}>
                      Shop videre
                    </ShopButton>
                    <CheckoutButton
                      size="large"
                      variant="success"
                      disabled={count === 0}
                      onClick={handleCheckout}
                    >
                      Til checkout
                    </CheckoutButton>
                  </Actions>
                </Summary>
              </>
            )}
          </CartAside>
        </>
      )}
    </AnimatePresence>
  );
};
