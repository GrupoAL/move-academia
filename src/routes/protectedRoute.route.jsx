import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../contexts";
import PropTypes from "prop-types";

export const PrivateRoute = ({ children }) => {
  const { data } = useAppContext();
  const location = useLocation();

  if (!data?.token) {
    // Não autenticado - redireciona para login com state da rota atual
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export const AdminRoute = ({ children }) => {
  const { data } = useAppContext();
  const location = useLocation();

  if (!data?.token) {
    // Não autenticado - redireciona para login
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Verificação real se é admin (substitua pela sua lógica)
  const isAdmin = data?.user?.role === "admin"; // Exemplo

  if (!isAdmin) {
    // Autenticado mas não é admin - redireciona para dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};
