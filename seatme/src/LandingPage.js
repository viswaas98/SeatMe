import React from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Landingpageheader from "./components/Headers/Landingpageheader";
import Landingpagefooter from "./components/Footer/Landingpagefooter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RouteWithSubRoutes from "./utils/RouteWithSubRoutes";

const LandingPage = ({ routes }) => {
  const cards = [
    {
      path: "/auth/signin", // the url
      name: "Signin", // name that appear in Sidebar
    },
    {
      path: "/auth/signin",
      name: "Signup",
    },
  ];
  return (
    <div
      id="bgvideo"
      className="bgvideo w-background-video w-background-video-atom"
    >
      <video
        autoPlay
        loop
        style={{
          backgroundImage:
            'url("https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd312b46f3388a80fdd74_Concert-poster-00001.jpg")',
        }}
        muted
        playsInline
        data-wf-ignore="true"
        data-object-fit="cover"
      >
        <source
          src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd312b46f3388a80fdd74_Concert-transcode.mp4"
          data-wf-ignore="true"
        />
        <source
          src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dcd312b46f3388a80fdd74_Concert-transcode.webm"
          data-wf-ignore="true"
        />
      </video>
      <Landingpageheader />
      <div className="section">
        <div className="div-block">
          <div className="hero-container">
            <div className="hero-image-container">
              <img
                src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c15145e10765bc1b09cd6e_%E2%80%94Pngtree%E2%80%94concept%20team%20work%20meeting%20illlustration_5356573.png"
                loading="lazy"
                width={459}
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 80vw, (max-width: 991px) 60vw, (max-width: 1279px) 39vw, 458.984375px"
                srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c15145e10765bc1b09cd6e_%E2%80%94Pngtree%E2%80%94concept%20team%20work%20meeting%20illlustration_5356573-p-800.png 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c15145e10765bc1b09cd6e_%E2%80%94Pngtree%E2%80%94concept%20team%20work%20meeting%20illlustration_5356573-p-1080.png 1080w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c15145e10765bc1b09cd6e_%E2%80%94Pngtree%E2%80%94concept%20team%20work%20meeting%20illlustration_5356573.png 1199w"
                alt="hero image"
                className="hero-image"
              />
            </div>
            <h1 className="hero-title">SeatMe</h1>
            <p className="hero-description">
              Host a reserved public seating space or join one!
            </p>
          </div>
          <div className="auth-container">

            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </div>
        </div>
      </div>
      <Landingpagefooter />
    </div>
  );
};

export default LandingPage;
