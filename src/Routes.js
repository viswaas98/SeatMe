import Signup from "./components/Signup";
import Signin from "./components/Signin";
import ForgotPassword from "./components/ForgotPassword";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";

const routes = [
  {
    path: "/auth",
    component: LandingPage,
    routes: [
      {
        // Also note how we added /home before the
        // actual page name just to create a complete path
        path: "/auth/signup",
        component: Signup,
      },
      {
        path: "/auth/signin",
        component: Signin,
      },
      {
        path: "/auth/forgot-password",
        component: ForgotPassword,
      },
    ],
  },
  {
    path: "/dashboard",
    private: true,
    component: Dashboard,
    routes: [
        // {
        // Also note how we added /home before the
        // actual page name just to create a complete path
        // {
        // path: '/dashboard/reserve',
        // component: Reserve,
        // },
        // {
        // path: '/dashboard/settings',
        // component: Settings,
        // },
    ],
  },
];

export default routes;
