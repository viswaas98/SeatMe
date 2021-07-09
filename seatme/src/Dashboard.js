import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboardheader from "./components/Headers/Dashboardheader";
import Cardblock from "./components/Cards/Cardblock";
import Reservemodal from "./components/Modals/Reservemodal";
import Confirmmodal from "./components/Modals/Confirmmodal";
import Hostmodal from "./components/Modals/Hostmodal"

const Dashboard = () => {
  return (
    <div className="body">
      <Hostmodal/>
     <Confirmmodal/>
     <Reservemodal/>
      <Sidebar/>

      <div className="dashboard-container">
          <Dashboardheader/>
        
        <div className="dashboard-content-container">
          <div className="dashboard-title-container">
            <div className="dashboard-title-wrapper">
              <div className="dashboard-title">Your Hosted Rooms</div>
              <div className="div-block-26">
                <div className="text-block-10">
                  No rooms hosted yet. Would you like to
                </div>
                <a href="#" className="link-2">
                  host one?
                </a>
              </div>
            </div>
            <a href="#" className="host-button-wrapper w-inline-block">
              <div className="host-button">
                <div className="text-block-3">+</div>
              </div>
              <div className="host-button-title">Host a room</div>
            </a>
          </div>
          <div className="div-block-43">
            <Cardblock isthumbnail={true} thumbnail="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dc1cd3d72dd417cf77dea6_classspace_Large_TA.jpg"/>
            <Cardblock/>
            <Cardblock/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
