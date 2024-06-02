import React from 'react'
import "./RightContent.css";
import Alertchart1 from './Alertchart1';
import Alertchart2 from './Alertchart2';
import AnglePieChart from './AnglePieChart';

const RightContent = () => {
  return (
    <div className='rightContainer'>
      <p>Alert and Serverity</p>
        <div className='upperConatiner'>
        <div className='upperConatinerLeft'>
          <Alertchart1 />
        </div>
        <div className='upperConatinerRight'>
          <AnglePieChart />
        </div>
        </div>
        <div className='lowerContainer'>
        <Alertchart2 />
        </div>
    </div>
  )
}

export default RightContent
