import { MainLayout } from "../components/layout/MainLayout";
import { ChangePasswordSection } from "../components/sections/ChangePasswordSection";

export const ChangePasswordPage = () => {
  return (
    <MainLayout pageTitle="Skift kodeord">
      <ChangePasswordSection />
    </MainLayout>
  );
};
