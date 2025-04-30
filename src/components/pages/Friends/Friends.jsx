import React, { act, useEffect, useState } from 'react'
import './Friends.scss'
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';
const Friends = () => {
  const cardsPerCount = 4
  const testData = [
    {
      id: 1,
      name: 'John Doe',
      status: 'online',
      imgUrl: 'https://example.com/johndoe.jpg',
      description: 'John is a software engineer who loves hiking and playing chess.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      status: 'offline',
      imgUrl: 'https://example.com/janesmith.jpg',
      description: 'Jane is a graphic designer with a passion for photography and art.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      status: 'online',
      imgUrl: 'https://example.com/alicejohnson.jpg',
      description: 'Alice enjoys baking cakes and volunteering at local shelters.',
    },
    {
      id: 4,
      name: 'Bob Brown',
      status: 'offline',
      imgUrl: 'https://example.com/bobbrown.jpg',
      description: 'Bob is a freelance writer who often travels to find inspiration.',
    },
    {
      id: 5,
      name: 'Charlie Davis',
      status: 'online',
      imgUrl: 'https://example.com/charliedavis.jpg',
      description: 'Charlie is a student studying biology and playing the guitar.',
    },
    {
      id: 6,
      name: 'Diana Evans',
      status: 'online',
      imgUrl: 'https://example.com/dianaevans.jpg',
      description: 'Diana loves painting landscapes and reading mystery novels.',
    },
    {
      id: 7,
      name: 'Ethan Harris',
      status: 'offline',
      imgUrl: 'https://example.com/ethanharris.jpg',
      description: 'Ethan works in marketing and enjoys cycling on weekends.',
    },
    {
      id: 8,
      name: 'Fiona Green',
      status: 'online',
      imgUrl: 'https://example.com/fionagreen.jpg',
      description: 'Fiona is a yoga instructor who travels the world teaching classes.',
    },
    {
      id: 9,
      name: 'George Lee',
      status: 'offline',
      imgUrl: 'https://example.com/georgelee.jpg',
      description: 'George plays the piano and writes his own music compositions.',
    },
    {
      id: 10,
      name: 'Hannah Miller',
      status: 'online',
      imgUrl: 'https://example.com/hannahmiller.jpg',
      description: 'Hannah is a fashion blogger and coffee enthusiast.',
    },
    {
      id: 11,
      name: 'Ian Thompson',
      status: 'offline',
      imgUrl: 'https://example.com/ianthompson.jpg',
      description: 'Ian enjoys coding mobile apps and exploring virtual reality tech.',
    },
  ];
  

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

    const cutDescription = (desc)=>{
      if(desc.length>50){
        return desc.slice(0,50)+'...'
      }else{
        return desc
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
          <div className="Friends-card-second-row-name">{item.name}</div>
          <Tooltip title={item.status}>
          <div className="Friends-card-second-row-status" style={{backgroundColor: `${getStatusColor(item.status)}`}}></div>
          </Tooltip>
        </div>

        <div className="Friends-card-description">
          {cutDescription(item.description)}
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