import { MainLayout } from "../components/layout/MainLayout";
import { AboutSection } from "../components/sections/AboutSection";

export const AboutPage = () => {
  return (
    <MainLayout pageTitle="Om os">
      <AboutSection />
    </MainLayout>
  );
};
