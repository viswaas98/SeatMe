import React from "react";
import Dashboardheader from "./components/Headers/Dashboardheader";
import Cardblock from "./components/Cards/Cardblock";
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  withRouter,
  Switch,
  Redirect,
} from "react-router-dom";
import RouteWithSubRoutes from "./utils/RouteWithSubRoutes";
import routes from "./Routes";
import HostModal from "./components/Modals/HostModal";
import MainDashboard from "./MainDashboard";
import DashboardSwitch from "./components/DashboardSwitch";
import Privateroute from "./components/Privateroute";

function Dashboard() {
  return (
    <Router>
      <DashboardSwitch/>
    </Router>
  );
}

export default Dashboard;
