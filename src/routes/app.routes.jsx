// Core
import { Route, Routes, useLocation } from "react-router-dom";

// Components
import { Flex } from "@chakra-ui/react";
import { FooterComponent } from "../components/footer";
import { HeaderComponent } from "../components/header";
import { RoutesData } from "../data";

export const AppRoutes = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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
    <Flex
      direction={"column"}
      bg="primary.bg"
      width={"100dvw"}
      height={"100dvh"}
      alignItems={"center"}
    >
      <HeaderComponent type={pageType} />
      <Flex
        minW={"100%"}
        height={"70%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Routes>
          {RoutesData?.filter((data) => {
            return data.route && data.component;
          })?.map((route, idx) => {
            if (route.route && route.component) {
              return (
                <Route
                  key={`route-${idx}`}
                  path={route.route}
                  element={<route.component />}
                />
              );
            }

            return <></>;
          })}
        </Routes>
      </Flex>
      {pageType === "logged" && <FooterComponent />}
    </Flex>
  );
};
