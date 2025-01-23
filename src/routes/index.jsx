import { BrowserRouter } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  //   const { data } = useAuth();

  return (
    <BrowserRouter>
      {/* {data?.token ? <AppRoutes /> : <AuthRoutes />} */}
      <AppRoutes />
    </BrowserRouter>
  );
};
