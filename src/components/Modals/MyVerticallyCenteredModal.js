import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import PlaceSearch from "../PlaceSearch";
import SettingSelect from "../SettingSelect";
import HostStep1 from "./HostStep1";
import HostStep2 from "./HostStep2";
import MainDashboard from "../../MainDashboard";

import {
  BrowserRouter as Router,
  Link,
  useHistory,
  withRouter,
  Route,
  Switch,
} from "react-router-dom";

function MyVerticallyCenteredModal(props, show, onHide) {
  const history = useHistory();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <button onClick={onHide}>Close</button>
      <Route exact path="/dashboard/home/host-step-1">
        <HostStep1 />
      </Route>

      <Route exact path="/dashboard/home/host-step-2">
        <HostStep2 />
      </Route>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
