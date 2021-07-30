import React, { useState, setState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
// import TimePicker from 'react-time-picker';
import PlaceSearch from "./PlaceSearch";
import TimePicker from "react-bootstrap-time-picker";
import firebase from '../firebase'
import SettingSelect from "./SettingSelect";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {
  Link,
  useHistory,
  withRouter,
  useLocation,
  Switch,
} from "react-router-dom";
function Host(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [timeStart, setTimeStart] = useState("0");
  const [timeEnd, setTimeEnd] = useState("0");

  let history = useHistory();

  function handleTimeStartChange(timeStart) {
    setTimeStart(timeStart);
    console.log(timeStart);
  }
  function handleTimeEndChange(timeEnd) {
    setTimeEnd(timeEnd);
    console.log(timeEnd);
  }
  // function createhost() {
  //   const hostRef = firebase.database().ref('hosted-room');
  //   const hosted_room = {
  //     title,
  //     complete:false,
  //   };
  //   hostRef.push(hosted_room);
  // }
  return (
    <div className="dashboard-content-container">
      <div className="dashboard-title-container">
        <div className="dashboard-title-wrapper">
          <div className="dashboard-title">
            Enter details for the hosting room
          </div>
        </div>
        <a href="#" className="host-button-wrapper w-inline-block">

            <Button
              variant="danger"
              onClick={() => {
                history.goBack();
              }}
            >
              Cancel
            </Button>

        </a>
      </div>
      <div className=" w-100 div-block-43 d-flex flex-column justify-content-center align-items-center">
        <Form className="w-50">
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
          <Form.Group
            className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
            id="host-setting"
          >
            <Form.Label className="text-white">Purpose</Form.Label>

            <Form.Control as="textarea" aria-label="With textarea" />
          </Form.Group>
          <Form.Group
            className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
            id="host-setting"
          >
            <Form.Label className="text-white">Time</Form.Label>
            <div className="d-flex flex-row justify-content-start align-items-start">
              <div
                id="host-start-date"
                className="d-flex flex-column justify-content-start align-items-start"
              >
                <Form.Label className="text-light">From</Form.Label>
                <TimePicker
                  onChange={handleTimeStartChange}
                  value={timeStart}
                  start="10:00"
                  end="21:00"
                  step={30}
                />
              </div>

              <div className="d-flex flex-column justify-content-start align-items-start">
                <Form.Label className="text-light">To</Form.Label>
                <TimePicker
                  onChange={handleTimeEndChange}
                  value={timeEnd}
                  start="10:00"
                  end="21:00"
                  step={30}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group
            className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
            id="host-setting"
          >
            <Form.Label className="text-white">Date Picker</Form.Label>

            <DatePicker
              id="host-date"
              selected={startDate}
              onChange={(date) => {
                console.log(date);
                setStartDate(date);
              }}
            />
          </Form.Group>
          <Form.Group
            className="w-100 pb-3 d-flex flex-column justify-content-start align-items-start"
            id="host-setting"
          >
            <Form.Label className="text-white">Seats</Form.Label>

            <Form.Control className="text-dark" type="number"></Form.Control>
          </Form.Group>
          <div className="d-flex flex-row justify-content-start align-items-start">
            <Button
              variant="success"
              onClick={() => {
                history.goBack();
                // createhost();
                console.log(props.PlaceSearch.address);
              }}
            >
              Save
            </Button>
          </div>

        </Form>
      </div>
    </div>
  );
}

export default Host;
