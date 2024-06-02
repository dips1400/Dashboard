import React from "react";
import "./DashboardTitle.css";
import Search from "../images/search.png";
import Profile from "../images/profile.png"
import Message from "../images/email.png";

const DashboardTitle = () => {
  return (
    <div className="content">
      <div className="title">
        <p>Hi Ricky</p>
      </div>
      <div className="context">
        <div className="search-bar">
          <img src={Search} alt="search-icon" className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>
        <div className="profile-context">
            <div className="circle">
                <img src={Message} alt="message-icon" />
            </div>
            <div className="profile-img">
                <img src={Profile} alt="profile" width="40px" height="40px"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTitle;
