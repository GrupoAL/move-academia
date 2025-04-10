// Main Pages

// Internal Pages
import WelcomeAnimation from "../components/animations/login";
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
    route: "/player",
    title: "logged",
    component: VideoPlayerPage,
  },
  {
    route: "/welcome",
    title: "welcome",
    component: WelcomeAnimation,
  },
  {
    route: "/bye",
    title: "bye",
    component: WelcomeAnimation,
  },
];
