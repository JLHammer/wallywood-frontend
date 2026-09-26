import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "../data/routes";
import { MainLayout } from "../components/layout/MainLayout";
import { Loader } from "../components/ui/Loader";

export const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  if (!user) {
    return (
      <Navigate to={ROUTES.login} replace state={{ from: location.pathname }} />
    );
  }

  return <Outlet />;
};
