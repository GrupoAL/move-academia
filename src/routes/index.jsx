import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import WelcomeAnimation from "../components/animations/login";
// import { useAppContext } from "../contexts";
// import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  // const { data } = useAppContext();

  return (
    <BrowserRouter>
      <WelcomeAnimation />
      <AppRoutes />
      {/* {!data?.token ? <AppRoutes /> : <AuthRoutes />} */}
    </BrowserRouter>
  );
};
