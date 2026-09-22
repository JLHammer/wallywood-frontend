import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../data/routes";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";

const { home, about } = ROUTES;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={home} element={<HomePage />} />
      <Route path={about} element={<AboutPage />} />
    </Routes>
  );
};
