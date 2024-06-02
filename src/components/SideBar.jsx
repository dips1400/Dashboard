import React from 'react'
// import { NavLink } from 'react-router-dom';
import Dashboard from '../images/dashboard.png';
import Home from '../images/home.png';
import Barchart from '../images/bar-chart.png';
import Notification from '../images/bell.png';
import Setting from '../images/setting.png';
import Antivirus from '../images/protected.png';
import Profile from '../images/profile-user.png';
import Logo from "../images/favicon.png"
import './Sidebar.css';

const SideBar = () => {
  return (
    <div className='sidebarcontainer'>
        <ul>
          <div className='logo'>
            <li><a href="#"><img src={Logo} alt="logo-icon" height="40px" width="40px"/></a></li>
          </div>
          <div className='links'>
          <li><a href='#'><img src={Home} alt='home-icon' /></a></li>
          <li><a href='#'><img src={Barchart} alt='Barchart-icon' /></a></li>
          <li><a href='#'><img src={Dashboard} alt='dashboard-icon' /></a></li>
          <li><a href='#'><img src={Antivirus} alt='proctection-icon' /></a></li>
          <li><a href='#'><img src={Notification} alt='notification-icon' /></a></li>
          <li><a href='#'><img src={Setting} alt='setting-icon' /></a></li>
          </div>
          <div className='profile'>
          <li><a href='#'><img src={Profile} alt='profile-icon' height="22px" width="22px"/></a></li>
          </div>
        </ul>
    </div>
  )
}

export default SideBar