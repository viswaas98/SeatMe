import React from "react";

function Seatstatus() {
  return (
    <div className="event-info-wrapper">
      <div className="event-attenders">
        <img
          src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg"
          loading="lazy"
          width={39}
          sizes="38.984375px"
          srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w"
          alt=""
          className="attendeee1"
        />
        <img
          src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg"
          loading="lazy"
          width={39}
          sizes="38.984375px"
          srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w"
          alt=""
          className="attendee2"
        />
        <img
          src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg"
          loading="lazy"
          width={39}
          sizes="38.984375px"
          srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w"
          alt=""
          className="sttendee3"
        />
      </div>
      <div className="event-seats-wrapper">
        <div id="available-seats-wrapper" className="seats-wrapper">
          <img
            src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbd2766a92865d56339eba_image%20(23).png"
            loading="lazy"
            width={28}
            id="available-seats-icon"
            alt=""
            className="seats-icon"
          />
          <div id="available-seats-number" className="seats-number">
            45
          </div>
        </div>
        <div id="reserved-seats-wrapper" className="seats-wrapper">
          <img
            src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png"
            loading="lazy"
            width={38}
            sizes="37.98828125px"
            id="reserved-seats-icon"
            srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w"
            alt=""
            className="seats-icon"
          />
          <div id="reserved-seats-number" className="seats-number">
            45
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seatstatus;
