import React, { useState } from "react";
import { Form, Modal, Button, Card } from "react-bootstrap";
import PlaceSearch from "../PlaceSearch";
import SettingSelect from "../SettingSelect";
import { Link, useHistory, withRouter, Route, Switch } from "react-router-dom";

function HostStep1(props) {
  let history = useHistory();

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <>
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
    </>
  );
}

export default HostStep1;
