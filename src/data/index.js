// Main Pages

// Internal Pages
import WelcomeAnimation from "../components/animations/welcome";
import AdminPage from "../pages/admin";
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RecoverPasswordPage } from "../pages/recoverPassword";
import { VideoPlayerPage } from "../pages/videoPlayer";

export const RoutesData = [
  {
    name: "Home",
    route: "/",
    type: "off",
    // requiresAuth: false,
    component: LoginPage,
  },
  {
    name: "Recover Password",
    route: "/recoverPassword",
    type: "off",
    // requiresAuth: false,
    component: RecoverPasswordPage,
  },
  {
    name: "Dashboard",
    route: "/dashboard",
    type: "logged",
    // requiresAuth: true,
    component: DashboardPage,
  },
  {
    name: "Activity Dashboard",
    route: "/dashboard/:activite",
    type: "logged",
    // requiresAuth: true,
    component: DashboardPage,
  },
  {
    name: "Video Player",
    route: "/dashboard/:activite/:choice",
    type: "logged",
    // requiresAuth: true,
    component: DashboardPage,
  },
  {
    name: "admin",
    route: "/admin",
    type: "adm",
    onlyAdmin: true,
    component: AdminPage,
  },
  {
    name: "Video Player",
    route: "/player",
    type: "logged",
    // requiresAuth: true,
    component: VideoPlayerPage,
  },
  {
    name: "Welcome",
    route: "/welcome",
    type: "welcome",
    component: WelcomeAnimation,
  },
  {
    name: "Bye",
    route: "/bye",
    type: "bye",
    component: WelcomeAnimation,
  },
];
