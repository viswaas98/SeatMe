import React from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import {
    Link,
    useHistory,
    withRouter,
    useLocation,  
    Switch,
  } from "react-router-dom";
function Settings() {
    const history = useHistory();
    return (
        <div className="dashboard-content-container">
      <div className="dashboard-title-container">
        <div className="dashboard-title-wrapper">
          <div className="dashboard-title">
            Settings
          </div>
        </div>
         
      </div>
      <div className=" w-100 div-block-43 d-flex flex-column justify-content-center align-items-center">
        <Form className="w-50">
          <Form.Label className="text-white">Nickname</Form.Label>
          <Form.Group
            className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
            id="host-location"
          >
                        <Form.Control className="text-dark" type="number"></Form.Control>

          </Form.Group>
          <Form.Group
            className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
            id="host-setting"
          >
            <Form.Label className="text-white">Setting</Form.Label>

            <Form.Control className="text-dark" type="number"></Form.Control>

          </Form.Group>
          <Form.Group
            className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
            id="host-setting"
          >
            <Form.Label className="text-white">Place</Form.Label>


          </Form.Group>
          <Form.Group
            className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
            id="host-setting"
          >
            <Form.Label className="text-white">Purpose</Form.Label>

            <Form.Control as="textarea" aria-label="With textarea" />
          </Form.Group>
          
          <div className="d-flex flex-row justify-content-start align-items-start">
            <Button
              variant="success"
              onClick={() => {
                history.goBack();
              }}
            >
              Save
            </Button>
          </div>

        </Form>
      </div>
    </div>
    )
}

export default Settings
