import React from 'react'

function Sidebar() {
    return (
        <div className="sidebar">
        <a href="/" className="sidebar-logo-wrapper w-inline-block">
          <img
            src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c186337870b4d11051f030_image%20(3).png"
            loading="lazy"
            width={79}
            sizes="(max-width: 479px) 100vw, (max-width: 991px) 10vw, (max-width: 1279px) 78.984375px, 5vw"
            srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c186337870b4d11051f030_image%20(3)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c186337870b4d11051f030_image%20(3).png 700w"
            alt=""
            className="sidebar-logo"
          />
          <div className="sidebar-title">SeatMe</div>
        </a>
        <link rel="prerender" href="/" />
        <a href="#" className="dashboard-button-wrapper w-inline-block">
          <div className="dashboard-logo-container host-dashboard-logo">
            <img
              src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbaf375eab00461522eaa3_image%20(22).png"
              loading="lazy"
              width={39}
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 6vw, (max-width: 1279px) 38.984375px, 2vw"
              srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbaf375eab00461522eaa3_image%20(22)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbaf375eab00461522eaa3_image%20(22).png 615w"
              alt=""
              className="dashboard-logo"
            />
          </div>
          <div className="dashboard-button-label-container">
            <div className="dashboard-label">Hosted Rooms</div>
          </div>
        </a>
        <a href="#" className="dashboard-button-wrapper w-inline-block">
          <div className="dashboard-logo-container">
            <img
              src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png"
              loading="lazy"
              width={50}
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 7vw, 50px"
              srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe88be4343772f4cdb6_image%20(6).png 559w"
              alt=""
              className="dashboard-logo"
            />
          </div>
          <div className="dashboard-button-label-container">
            <div className="dashboard-label reservation">Reservations</div>
          </div>
        </a>
        <a href="#" className="dashboard-button-wrapper w-inline-block">
          <div className="dashboard-logo-container">
            <img
              src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe89e3faad80b60eaed_image%20(7).png"
              loading="lazy"
              width={35}
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 6vw, 35px"
              srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe89e3faad80b60eaed_image%20(7)-p-500.png 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe89e3faad80b60eaed_image%20(7).png 601w"
              alt=""
              className="dashboard-logo"
            />
          </div>
          <div className="dashboard-button-label-container">
            <div className="dashboard-label settings">Settings</div>
          </div>
        </a>
      </div>
    )
}

export default Sidebar
