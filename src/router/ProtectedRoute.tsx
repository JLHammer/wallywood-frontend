import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "./routes";
import { Loader } from "../components/ui/Loader";

// Only renders child routes for logged-in users
export const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();
  // Redirect after login
  const location = useLocation();

  if (isLoading) return <Loader />;

  // Guests go to login, then back here via `from`
  if (!user) {
    return (
      <Navigate to={ROUTES.login} replace state={{ from: location.pathname }} />
    );
  }

  // Logged-in users can access child routes
  return <Outlet />;
};
