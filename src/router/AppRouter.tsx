import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../data/routes";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";

const { home, about, contact, login, signup } = ROUTES;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={home} element={<HomePage />} />
      <Route path={about} element={<AboutPage />} />
      <Route path={contact} element={<ContactPage />} />
      <Route path={login} element={<LoginPage />} />
      <Route path={signup} element={<SignupPage />} />
    </Routes>
  );
};
