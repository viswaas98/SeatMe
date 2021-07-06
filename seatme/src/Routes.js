import Signup from "./components/Signup";
import Signin from "./components/Signin";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";

const routes = [
    {
    path: '/auth',
    component: LandingPage,
    routes: [              
        {
        // Also note how we added /home before the 
        // actual page name just to create a complete path
        path: '/auth/signup',
        component: Signup,
        },
        {
        path: '/auth/signin',
        component: Signin,
        },
    ],
    },
    {
    path: '/dashboard',
    component: Dashboard,
    // added nested routes
    
    },
];

export default routes;