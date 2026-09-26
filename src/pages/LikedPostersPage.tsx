import { MainLayout } from "../components/layout/MainLayout";
import { LikedPostersSection } from "../components/sections/LikedPostersSection";

export const LikedPostersPage = () => {
  return (
    <MainLayout pageTitle="Favoritter">
      <LikedPostersSection />
    </MainLayout>
  );
};
