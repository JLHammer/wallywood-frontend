import { MainLayout } from "../components/layout/MainLayout";
import { SignupSection } from "../components/sections/SignupSection";

export const SignupPage = () => {
  return (
    <MainLayout pageTitle="Opret profil">
      <SignupSection />
    </MainLayout>
  );
};
