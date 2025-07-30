// src/routes/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAppContext } from "../contexts";

import PropTypes from "prop-types";

export const ProtectedRoute = ({ children, onlyAdmin = false }) => {
  const { data } = useAppContext();

  if (!data?.token) {
    return <Navigate to="/" replace />;
  }

  if (onlyAdmin && !data?.isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  onlyAdmin: PropTypes.bool,
};
