import React from "react";

import { Form, Button, Card, Alert } from "react-bootstrap";
import PlaceSearch from "../PlaceSearch";
import SettingSelect from "../SettingSelect";
import HostStep1 from "./HostStep1";
import HostStep2 from "./HostStep1";

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

function Modal() {
  let history = useHistory();

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      // onClick={back}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.65)",
        zIndex: 4,
      }}
    >
      <div className="host-modal">
        <Card id="modal-card" className="w-100">






          <Card.Body className="modal-card text-white w-100">
            <h2 className="pb-3 text-white">Step: 1 of 3</h2>
            <Form className="w-100">
              <Form.Label className="text-white">Location</Form.Label>
              <Form.Group
                className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
                id="host-location"
              >
                <PlaceSearch />
              </Form.Group>
              <Form.Group
                className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
                id="host-setting"
              >
                <Form.Label className="text-white">Setting</Form.Label>

                <SettingSelect purpose="setting" />
              </Form.Group>
              <Form.Group
                className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
                id="host-setting"
              >
                <Form.Label className="text-white">Place</Form.Label>

                <SettingSelect purpose="place" />
              </Form.Group>
            </Form>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <Button onClick={back} variant="danger" id="host-back">
                Back
              </Button>

              <Button variant="secondary" id="host-create-custom">
                Create Custom
              </Button>

              <Button variant="success">Next</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Modal;
