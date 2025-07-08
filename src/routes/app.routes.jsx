// Core
import { Route, Routes, useLocation } from "react-router-dom";

// Components
import { Grid } from "@chakra-ui/react";
import { FooterComponent } from "../components/footer";
import { HeaderComponent } from "../components/header";
import { RoutesData } from "../data";
import { useAppContext } from "../contexts";
// import { AdminRoute, PrivateRoute } from "./protectedRoute.route";

export const AppRoutes = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { canAnimate } = useAppContext();

  // Find the corresponding page data in RoutesData based on the current route
  const currentPage = RoutesData.find((item) => {
    if (item.route === currentPath) {
      return true;
    }

    // Check if the route includes a dynamic parameter (e.g., /employees/:id)
    const routeParts = item.route.split("/");
    const currentPathParts = currentPath.split("/");

    if (routeParts.length === currentPathParts.length) {
      for (let i = 0; i < routeParts.length; i++) {
        if (routeParts[i].startsWith(":")) {
          continue; // Ignore dynamic parameter parts
        }
        if (routeParts[i] !== currentPathParts[i]) {
          return false;
        }
      }
      return true;
    }

    return false;
  });

  // Determine the header
  const pageType = currentPage && currentPage.type ? currentPage.type : "off";

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
          {RoutesData?.filter((data) => {
            return data.route && data.component;
          })?.map((route, idx) => {
            if (route.route && route.component) {
              return (
                <Route
                  key={`route-${idx}`}
                  path={route.route}
                  element={
                    // route.onlyAdmin ? (
                    //   <AdminRoute>
                    //     <route.component />
                    //   </AdminRoute>
                    // ) : route.requiresAuth ? (
                    //   <PrivateRoute>
                    //     <route.component />
                    //   </PrivateRoute>
                    // ) : (
                    <route.component />
                    // )
                  }
                />
              );
            }

            return <></>;
          })}
        </Routes>
      )}
      {pageType === "logged" && <FooterComponent />}
    </Grid>
  );
};
