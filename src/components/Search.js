import React from "react";

import { Form, Button, Card, Alert } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";

function Search() {
  return (
    <Form>
      <Button id="search-button">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Form.Control id="search-bar" type="search"></Form.Control>

          <FaIcons.FaSearch id="search-icon" className="text-white" />
        </div>
      </Button>
    </Form>
  );
}

export default Search;
