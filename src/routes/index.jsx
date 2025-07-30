// src/routes/index.jsx
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import WelcomeAnimation from "../components/animations/welcome";

export const Routes = () => {
  return (
    <BrowserRouter>
      <WelcomeAnimation />
      <AppRoutes />
    </BrowserRouter>
  );
};
