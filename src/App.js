import "./App.css";
// import Signup from "./components/Signup";
// import Signin from "./components/Signin";
import routes from './Routes';
import Dashboard from "./Dashboard"
import { AuthProvider } from "./contexts/AuthContext";
// import firebase from "firebase/app";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';
import Privateroute from "./components/Privateroute"

import "firebase/auth";
import MainDashboard from "./MainDashboard";

function App() {
  return (

    <AuthProvider>
      <Router>
        <Switch>
        <Redirect exact from='/' to='/auth/signup' />
        {/* <Redirect exact from='/dashboard' to='/auth/signin' /> */}
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
                                                                