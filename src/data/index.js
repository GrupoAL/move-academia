// Main Pages

// Internal Pages
import WelcomeAnimation from "../components/animations/login";
import AdminPage from "../pages/admin";
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RecoverPasswordPage } from "../pages/recoverPassword";
import { VideoPlayerPage } from "../pages/videoPlayer";

export const RoutesData = [
  {
    route: "/",
    type: "off",
    component: LoginPage,
  },
  {
    route: "/recoverPassword",
    type: "off",
    component: RecoverPasswordPage,
  },
  {
    route: "/dashboard",
    type: "logged",
    component: DashboardPage,
  },
  {
    route: "/dashboard/:activite",
    type: "logged",
    component: DashboardPage,
  },
  {
    route: "/dashboard/:activite/:choice",
    type: "logged",
    component: DashboardPage,
  },
  {
    route: "/admin",
    type: "adm",
    component: AdminPage,
  },
  {
    route: "/player",
    type: "logged",
    component: VideoPlayerPage,
  },
  {
    route: "/welcome",
    type: "welcome",
    component: WelcomeAnimation,
  },
  {
    route: "/bye",
    type: "bye",
    component: WelcomeAnimation,
  },
];
