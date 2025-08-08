import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAppContext } from "../contexts";
import { Grid } from "@chakra-ui/react";
import { HeaderComponent } from "../components/header";
import { FooterComponent } from "../components/footer";
import { RoutesData } from "../data";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const { data, loading } = useAppContext();

  if (loading) return null;

  if (data?.token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const PrivateRoute = ({ children }) => {
  const { data, loading } = useAppContext();

  if (loading) return null;

  if (!data?.token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AdminRoute = ({ children }) => {
  const { data, loading } = useAppContext();

  if (loading) return null;

  if (!data?.token) {
    return <Navigate to="/" replace />;
  }

  if (!data?.isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export const AppRoutes = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { canAnimate } = useAppContext();

  const currentPage = RoutesData.find((item) => {
    if (item.route === currentPath) return true;

    const routeParts = item.route.split("/");
    const currentPathParts = currentPath.split("/");

    if (routeParts.length === currentPathParts.length) {
      for (let i = 0; i < routeParts.length; i++) {
        if (routeParts[i].startsWith(":")) continue;
        if (routeParts[i] !== currentPathParts[i]) return false;
      }
      return true;
    }

    return false;
  });

  const pageType = currentPage?.type || "off";

  return (
    <Grid
      templateRows="auto 1fr auto"
      bg="primary.bg"
      width="100dvw"
      height="100dvh"
      overflow="hidden"
    >
      <HeaderComponent type={pageType} />
      {!canAnimate.run && (
        <Routes>
          {RoutesData?.filter((data) => data.route && data.component)?.map(
            (route, idx) => {
              // Define o wrapper de rota apropriado
              let routeWrapper;

              if (route.onlyAdmin) {
                routeWrapper = (
                  <AdminRoute>
                    <route.component />
                  </AdminRoute>
                );
              } else if (["off", "welcome", "bye"].includes(route.type)) {
                routeWrapper = (
                  <PublicRoute>
                    <route.component />
                  </PublicRoute>
                );
              } else {
                routeWrapper = (
                  <PrivateRoute>
                    <route.component />
                  </PrivateRoute>
                );
              }

              return (
                <Route
                  key={`route-${idx}`}
                  path={route.route}
                  element={routeWrapper}
                />
              );
            }
          )}

          {/* Rota de fallback */}
          <Route
            path="*"
            element={
              <PublicRoute>
                <Navigate to={location.state?.from?.pathname || "/"} replace />
              </PublicRoute>
            }
          />
        </Routes>
      )}
      {pageType === "logged" && <FooterComponent />}
    </Grid>
  );
};
PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
