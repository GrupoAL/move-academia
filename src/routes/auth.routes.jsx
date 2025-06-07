import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { useAppContext } from "../contexts";
import { AppRoutes } from "./app.routes";

export const AuthRoutes = () => {
  const { data } = useAppContext();
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/*"
        element={data?.token ? <AppRoutes /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
};
