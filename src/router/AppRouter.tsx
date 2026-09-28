import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import { ProtectedRoute } from "./ProtectedRoute";
import { MainLayout } from "../components/layout/MainLayout";
import { PostersLayout } from "../components/layout/PostersLayout";
import { HomePage } from "../pages/HomePage";
import { PostersListPage } from "../pages/PostersListPage";
import { PostersDetailsPage } from "../pages/PostersDetailsPage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { ChangePasswordPage } from "../pages/ChangePasswordPage";
import { LikedPostersPage } from "../pages/LikedPostersPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { NotFoundPage } from "../pages/NotFoundPage";

const {
  home,
  posters,
  postersByGenre,
  postersDetails,
  about,
  contact,
  login,
  signup,
  changePassword,
  likedPosters,
  checkout,
  notFound,
} = ROUTES;

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={home} element={<HomePage />} />
        <Route element={<PostersLayout />}>
          <Route path={posters} element={<PostersListPage />} />
          <Route path={postersByGenre} element={<PostersListPage />} />
          <Route path={postersDetails} element={<PostersDetailsPage />} />
        </Route>
        <Route path={about} element={<AboutPage />} />
        <Route path={contact} element={<ContactPage />} />
        <Route path={login} element={<LoginPage />} />
        <Route path={signup} element={<SignupPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={changePassword} element={<ChangePasswordPage />} />
          <Route path={likedPosters} element={<LikedPostersPage />} />
        </Route>
        <Route path={checkout} element={<CheckoutPage />} />
        <Route path={notFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
