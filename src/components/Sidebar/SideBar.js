import React, { useState } from "react";
import {
  Link,
  useHistory,
  withRouter,
  useLocation,
  Switch,
} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SideBarData";
import { Form, Button, Card, Alert } from "react-bootstrap";
import * as FiIcons from "react-icons/fi";
function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      {/* <Link to='#' className='menu-bars'>
        <a className="side-bar" onClick={showSidebar}>
        
                <FaIcons.FaBars className="text-white"/>
                
        </a>
        </Link>
        
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle ">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars className="text-white"/>
                    </Link>
                </li>
                {SidebarData.map((item,index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link id="sidebar-label-link" to={item.path}>
                                {item.icon}
                                <span className="sidebar-label">{item.title}</span>
                            </Link>
                        </li>
                )
                })}
            </ul>
        </nav> */}

      <Link to="#" className="menu-bars">
        <div className="sidebar">
          <div className="sidebar-opener">
            <a onClick={showSidebar}>
              <FaIcons.FaBars
                style={{ fontSize: "2rem" }}
                className="text-white"
              />
            </a>
          </div>
          <div className="sidebar-collapsed-button">
            <Link to="/dashboard">
              <a>
                <AiIcons.AiFillHome
                  style={{ fontSize: "2rem" }}
                  className="text-white"
                />
              </a>
            </Link>
          </div>
          <div className="sidebar-collapsed-button">
            <Link to="/reservations">
              <a>
                <FaIcons.FaBookmark
                  style={{ fontSize: "2rem" }}
                  className="text-white"
                />
              </a>
            </Link>
          </div>
          <div className="sidebar-collapsed-button">
            <Link to="/settings">
              <a>
                <FiIcons.FiSettings
                  style={{ fontSize: "2rem" }}
                  className="text-white"
                />
              </a>
            </Link>
          </div>
        </div>
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="menu-bars">
          <div className="sidebar-large">
            <div className="sidebar-opener">
              <div className="d-flex flex-row justify-content-start align-items-center">
                <a onClick={showSidebar}>
                  <FaIcons.FaBars
                    style={{ fontSize: "2rem" }}
                    className="text-white"
                  />
                </a>
                <div
                  classname="sidebar-logo"
                  style={{ fontSize: "22px", marginLeft: "10px" }}
                >
                  {" "}
                  SeatMe
                </div>
              </div>
            </div>
            <div className="sidebar-collapsed-button">
              <Link to="/dashboard" className="menu-bars">
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <a onClick={showSidebar}>
                    <AiIcons.AiFillHome
                      style={{ fontSize: "2rem" }}
                      className="text-white"
                    />
                  </a>
                  <span classname="sidebar-text" style={{ marginLeft: "10px" }}>
                    {" "}
                    Hosted Rooms
                  </span>
                </div>
              </Link>
            </div>
            <div className="sidebar-collapsed-button">
              <Link to="/reservations" className="menu-bars">
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <a onClick={showSidebar}>
                    <FaIcons.FaBookmark
                      style={{ fontSize: "2rem" }}
                      className="text-white"
                    />
                  </a>
                  <div classname="sidebar-text" style={{ marginLeft: "10px" }}>
                    {" "}
                    Reservations
                  </div>
                </div>
              </Link>
            </div>
            <div className="sidebar-collapsed-button">
              <Link to="/settings" className="menu-bars">
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <a onClick={showSidebar}>
                    <FiIcons.FiSettings
                      style={{ fontSize: "2rem" }}
                      className="text-white"
                    />
                  </a>
                  <span classname="sidebar-text" style={{ marginLeft: "10px" }}>
                    {" "}
                    Settings
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <ul className="nav-menu-items" onClick={showSidebar}>
            <div className="sidebar-opener"></div>
          <li className="navbar-toggle ">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars className="text-white" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link id="sidebar-label-link" to={item.path}>
                  {item.icon}
                  <span className="sidebar-label">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul> */}
      </nav>
    </>
  );
}

export default Sidebar;
