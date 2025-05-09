import React from 'react'
import './Profile.scss'
import { staticData } from '../../../staticData.js'
import { Tooltip } from '@mui/material'
const Profile = () => {
  const userId = window.location.pathname.split('/')[2]
  const userData = staticData.profiles[userId - 1]
  const networksData = staticData.networksData
  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'green';
      case 'offline':
        return 'gray';
      default:
        return;
    }
  }


  return (
    <div className="Profile">
      <div className="Profile-card">
        <div className="Profile-card-top">
          <div className="Profile-card-top-left">
            <img src={userData.imgUrl} alt={userData.name} className="Profile-card-top-left-img" />
            <div className="Profile-card-top-left-text">
              <div className="Profile-card-top-left-text-name">
                <div>{userData.name}</div>
                <Tooltip title={userData.status}>
                  <div className="Profile-card-top-left-text-name-status" style={{ backgroundColor: `${getStatusColor(userData.status)}` }}></div>
                </Tooltip>
              </div>
              <div className="Profile-card-top-left-text-nickname">{`@${userData.nickname}`}</div>
              <div className="Profile-card-top-left-text-links">
                {userData.networks && userData.networks.map((item, index) => {
                  return (
                    <a key={index} href={item.link} target="_blank">
                      <img className="Profile-card-top-left-text-links-icon" src={networksData[item.name].link} alt={networksData[item.name].name} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="Profile-card-top-notes"></div>
        </div>

        <div className="Profile-card-bottom">
          <div className="Profile-card-bottom-about">
            <div className="Profile-card-bottom-about-title">About me</div>
            <div className="Profile-card-bottom-about-text">{userData.about}</div>
          </div>
          <div className="Profile-card-bottom-panel">
            <div className="Profile-card-bottom-panel-button">edit</div>
            <div className="Profile-card-bottom-panel-button">add friend</div>
            <div className="Profile-card-bottom-panel-button Profile-card-bottom-panel-button-red">delete friend</div>
            <div className="Profile-card-bottom-panel-button">settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile