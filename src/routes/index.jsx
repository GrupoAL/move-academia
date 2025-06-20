import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
// import { useAppContext } from "../contexts";
// import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  // const { data } = useAppContext();
  return (
    <BrowserRouter>
      <AppRoutes />

      {/* {!data?.token ? <AppRoutes /> : <AuthRoutes />} */}
    </BrowserRouter>
  );
};
