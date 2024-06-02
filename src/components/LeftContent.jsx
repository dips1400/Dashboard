import React from 'react'
import "./LeftContent.css";
import UpperLeftContainer from './UpperLeftContainer';
import LowerLeftContainer from './LowerLeftContainer';

const LeftContent = () => {
  return (
    <div className='leftContent'>
      <UpperLeftContainer />
      <LowerLeftContainer />
    </div>
  )
}

export default LeftContent