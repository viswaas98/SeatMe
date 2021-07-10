import React from "react";
import Seatstatus from "./components/Seatstatus";
import Eventdescription from "./components/Eventdescription";

function Cardblock(props) {
  const isthumbnail = props.isthumbnail;
  if (isthumbnail) {
    return (
      <a href="#" className="card-block w-inline-block">
        <Eventdescription />
        <div className="thumbnail__wrapper">
          <img
            src={props.thumbnail}
            loading="lazy"
            width={394}
            sizes="(max-width: 479px) 197.8515625px, (max-width: 767px) 41vw, (max-width: 991px) 35vw, (max-width: 1279px) 23vw, 16vw"
            alt=""
            className="thumbnail"
          />
        </div>
        <Seatstatus />
      </a>
    );
  }
  return (
    <a href="#" className="card-block w-inline-block">
      <Eventdescription />
      <Seatstatus />
    </a>
  );
}

export default Cardblock;
