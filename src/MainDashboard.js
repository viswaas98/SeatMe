import React from "react";
import Dashboardheader from "./components/Headers/Dashboardheader";
import { Form, Button, Card, Alert } from "react-bootstrap";
import Cardblock from "./components/Cards/Cardblock";
import {
  Link,
  useHistory,
  withRouter,
  useLocation,  
  Switch,
} from "react-router-dom";
import HostModal from "./components/Modals/HostModal";
import MyVerticallyCenteredModal from "./components/Modals/MyVerticallyCenteredModal";

function MainDashboard() {
  // const [modalShow, setModalShow] = React.useState(false);
  // let location = useLocation();
  return (
    <div className="dashboard-content-container">
      <div className="dashboard-title-container">
        <div className="dashboard-title-wrapper">
          <div className="dashboard-title">Your Hosted Rooms</div>
          <div className="div-block-26">
            <div className="text-block-10">
              No rooms hosted yet. Would you like to
            </div>
            <a href="#" className="link-2">
              host one?
            </a>
          </div>
        </div>
        <a href="#" className="host-button-wrapper w-inline-block">
          {/* <div className="host-button">
            <div className="text-block-3">+</div>
          </div> */}
          <Link
            to={{
              pathname: "/host",
              // This is the trick! This link sets
              // the `background` in location state.
              // state: { background: location },
            }}
          >
            <Button variant="primary">
              + 
            </Button>
          </Link>
        </a>
      </div>
      <div className="div-block-43">
        <Cardblock
          isthumbnail={true}
          thumbnail="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA.jpg"
        />
        <Cardblock />
        <Cardblock />
      </div>
    </div>
    
  );
}

export default MainDashboard;
