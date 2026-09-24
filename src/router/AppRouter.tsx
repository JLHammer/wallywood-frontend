import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../data/routes";
import { HomePage } from "../pages/HomePage";
import { PostersListPage } from "../pages/PostersListPage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { CheckoutPage } from "../pages/CheckoutPage";

const {
  home,
  posters,
  postersByGenre,
  about,
  contact,
  login,
  signup,
  checkout,
} = ROUTES;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={home} element={<HomePage />} />
      <Route path={posters} element={<PostersListPage />} />
      <Route path={postersByGenre} element={<PostersListPage />} />
      <Route path={about} element={<AboutPage />} />
      <Route path={contact} element={<ContactPage />} />
      <Route path={login} element={<LoginPage />} />
      <Route path={signup} element={<SignupPage />} />
      <Route path={checkout} element={<CheckoutPage />} />
    </Routes>
  );
};
