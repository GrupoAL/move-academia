import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { useAppContext } from "../contexts";
import { AppRoutes } from "./app.routes";
import AdminPage from "../pages/admin";

export const AuthRoutes = () => {
  const { data } = useAppContext();
  console.log("AuthRoutes data:", data);
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* <Route
        path="/*"
        element={
          data?.isAdmin ? (
            <AdminPage />
          ) : data?.token ? (
            <AppRoutes />
          ) : (
            <Navigate to="/" replace />
          )
        }
      /> */}
    </Routes>
  );
};
