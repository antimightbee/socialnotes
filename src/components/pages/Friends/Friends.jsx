import React, { act, useEffect, useState } from 'react'
import './Friends.scss'
import { NavLink } from "react-router";

import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';
import { staticData } from '../../../staticData';
import cutText from '../../../functions/cutText';
const Friends = () => {
  const cardsPerCount = 6
  const testData = staticData.profiles
  

  const Card = ({item})=>{
    
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



    return(
      <div className="Friends-card">
        <div className="Friends-card-first-row">
          <img alt={item.name} className="Friends-card-first-row-img"/>
          <div className="Friends-card-first-row-panel">
            <div className="Friends-card-first-row-panel-delete"></div>
          </div>
        </div>
        <div className="Friends-card-second-row">
          <div className="Friends-card-second-row-name"><NavLink to={`/profile/${item.id}`}>{item.name}</NavLink></div>
          <Tooltip title={item.status}>
          <div className="Friends-card-second-row-status" style={{backgroundColor: `${getStatusColor(item.status)}`}}></div>
          </Tooltip>
        </div>

        <div className="Friends-card-description">
          {cutText(item.about, 50)}
        </div>
      </div>
    )
  }

useEffect(()=>{
  setSlicedData(testData.slice(0,cardsPerCount))
  setLoad({
    active:true,
    count:1
  })
},[])

const [load,setLoad] = useState({
  active:true,
  count:1
})
const [slicedData,setSlicedData] = useState(testData.slice(0,cardsPerCount))

const loadHandler = ()=>{
  setLoad({...load, count: load.count+1})
  setSlicedData(testData.slice(0,cardsPerCount*(load.count+1)))
}

const resetHandler = ()=>{
  setLoad({...load, count:1})
  setSlicedData(testData.slice(0,cardsPerCount))
}
  return (

    <div className="Friends">
      <div className="Friends-title">Friends</div>
      <div className="Friends-grid">
        {slicedData.map((item, index)=>{
          return <Card key={index} item={item} />
        })}
      </div>
      {cardsPerCount*load.count<testData.length ?
       (testData.length>8 && <Button variant='contained' onClick={loadHandler}>load more</Button>):
       <Button variant='contained' onClick={resetHandler}>reset</Button>
      }
    </div>
  )
}

export default Friends