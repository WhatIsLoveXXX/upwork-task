import { Navigate, Outlet } from "react-router-dom";
import { isUserAuthenticated } from "./user";

const PrivateRoutes = () => {
  const isAuthenticated = isUserAuthenticated();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
