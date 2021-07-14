import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useHistory,
  useLocation,
  withRouter,
  Switch,
  Redirect,
} from "react-router-dom";
import MainDashboard from "../MainDashboard";
import Modal from "./Modals/Modal";
import HostStep1 from "./Modals/HostStep1";
import HostStep2 from "./Modals/HostStep2";
import SideBar from "./Sidebar/SideBar";
import Dashboardheader from "./Headers/Dashboardheader";
import Host from './Host';
import Privateroute from "./Privateroute";
import Reservations from './Reservations'
import Settings from "./Settings";



function DashboardSwitch() {
  // let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  // let background = location.state && location.state.background;

  return (
    <div className="body">
      <SideBar/>
      <div className="dashboard-container">
        <Dashboardheader />
        <Switch>
          <Route exact path="/dashboard" component={MainDashboard}/>
          <Route exact path="/reservations" component={Reservations}/>
          <Route exact path="/settings" component={Settings}/>



          <Route exact path="/host" component={Host}/>
        </Switch>

        {/* <Switch location={background || location}>
          <Route exact path="/dashboard" children={<MainDashboard />} />
          <Route path="/HostStep1" children={<Modal />} />
        </Switch> */}

        {/* Show the modal when a background page is set
        {background && <Route path="/HostStep1" children={<Modal />} />} */}
      </div>
    </div>
  );
}

export default DashboardSwitch;
