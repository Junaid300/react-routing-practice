import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
  const auth = true;

  return auth ? <Outlet /> : <Navigate to="login" />;
};
