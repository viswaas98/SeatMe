import React, {useState} from "react";
import {Button, Alert} from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom';
import Search from '../Search'

const Dashboardheader = () => {
  const [error,setError] = useState('')
  const {currentUser, logout} = useAuth()
  const history = useHistory();
  async function handleLogout(){
    setError('');
    try{
      await logout();
      history.push("/auth/signin");
    }catch{
      setError("Failed to logout");
    }
  }
    return (
        <div className="dashboard-nav-bar">
          <div className="search-wrapper"><Search/></div>
          <div className="nav-button-wrapper">
            <div className="alert-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60c19fe876a2a3fa832252ad_image%20(4).png"
                loading="lazy"
                width={25}
                alt=""
                className="notification-icon"
              />
            </div>
            <div className="profile-wrapper">
              <div className="greeting-text">Good morning, {currentUser.email}</div>
              <img
                src="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg"
                loading="lazy"
                width={60}
                sizes="(max-width: 479px) 23vw, 60px"
                srcSet="https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-500.jpeg 500w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60c13227a194594d33f499b3/60dbb1c520f037ecc176a247_pexels-photo-5017691.jpeg 950w"
                alt=""
                className="profile-icon"
              />
            </div>
            
      {error && <Alert variant="danger">{error}</Alert>}
            <Button variant="link" onClick={handleLogout}>Log Out</Button>
          </div>
        </div>
    )

}

export default Dashboardheader;