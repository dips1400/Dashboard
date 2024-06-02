import React from 'react'
import ScatterPlot from './ScatterPlot';
import Graph from './Graph';
import "./LeftContent.css"

const UpperLeftContainer = () => {
  return (
    <div className='upperContext'>
      <div className='scatterplot'>
        <ScatterPlot />
      </div>
      <div className='graph'>
        <Graph />
      </div>
    </div>
  )
}

export default UpperLeftContainer