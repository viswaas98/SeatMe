import React from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

function SettingSelect(props) {
  const purpose = props.purpose;
  if(purpose=="setting"){
    return (
      <>
        
        <Form.Control as="select">
          <option>Select Setting...</option>
          <option>University</option>
          <option>Concert Hall</option>
          <option>Stadiums</option>
        </Form.Control>
      </>
    )
  }else if(purpose=="place"){return (
    <>
      
      <Form.Control as="select">
        <option>Select Place...</option>
        <option>Shields Library</option>
        <option>Peter A Rock Hall</option>
        <option>Wellman Hall</option>
      </Form.Control>
    </>
  )}
  
}

export default SettingSelect;
