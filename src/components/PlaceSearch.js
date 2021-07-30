import React from "react";
import scriptLoader from "react-async-script-loader";
import PlacesAutocomplete from "react-places-autocomplete";

import { Form, Button, Card, Alert } from "react-bootstrap";

function PlaceSearch({ isScriptLoaded, isScriptLoadSucceed }) {
    const [address, setAddress] = React.useState("");
  
    const handleChange = (value) => {
      setAddress(value)
    }
  
    const handleSelect = (value) => {
      setAddress(value)
      console.log(value);
    }
  
    if (isScriptLoaded && isScriptLoadSucceed) {
      return (
        <div className="w-100">
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className="w-100">
                <Form.Control
                    id="search-input"
                    className="w-100"
                  {...getInputProps({
                    placeholder: "Enter Address...",
                  })}
                />
                <ul className="list-group" id="search-input-box" > 
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const style = suggestion.activef
                      ? { color:'#000', backgroundColor: "#3a3a45", cursor: "pointer" }
                      : { color:'#000', backgroundColor: '#fff' , cursor: "pointer" };
  
                    return (
                      <li id="search-input-item" className="list-group-item" {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  
  export default scriptLoader([
    `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`,
  ])(PlaceSearch);