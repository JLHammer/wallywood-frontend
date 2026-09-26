import { MainLayout } from "../components/layout/MainLayout";
import { CheckoutSection } from "../components/sections/CheckoutSection";

export const CheckoutPage = () => {
  return (
    <MainLayout pageTitle="Checkout">
      <CheckoutSection />
    </MainLayout>
  );
};
