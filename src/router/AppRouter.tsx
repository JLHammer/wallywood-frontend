import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../data/routes";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";

const { home, about, contact } = ROUTES;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={home} element={<HomePage />} />
      <Route path={about} element={<AboutPage />} />
      <Route path={contact} element={<ContactPage />} />
    </Routes>
  );
};
