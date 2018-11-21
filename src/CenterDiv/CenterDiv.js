import React from 'react';
import SmallBox from '../SmallBox/SmallBox';
import Title from '../Title/Title';
//import TitleSmall from './TitleSmall/TitleSmall';
//import DoubleDiv from './DoubleDiv/DoubleDiv';
import './CenterDiv.css';
//image;title;txt

const contents1={
  image:'https://www.docplanner.com/img/flag.png',
  title:'Leader in 10 countries',
  txt:' Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina, and Chile'
}
const contents2={
  image:'https://www.docplanner.com/img/patients.png',
  title:'30 million unique patients',
  txt:' visit us every month'
}
const contents3={
  image:'https://www.docplanner.com/img/visits.png',
  title:'1 million appointments',
  txt:' booked last month '
}
const contents4={
  image:'https://www.docplanner.com/img/doctors.png',
  title:'2 million active doctors',
  txt:' trust in our solutions '
}

const CenterDiv = ()=>{
  return (
    <div className='center'>
      <div className='left'>
        <h1 className='center-title'>The world's biggest healthcare platform</h1>
        <p> We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries. </p>
        <img src='https://raw.githubusercontent.com/Rammoun/Doc-Planner/master/Capture.JPG'/>
      </div>
      <div className='right'>
          <div className='right1'>
            <SmallBox className='smallbox' obj={contents1}/>
            <SmallBox className='smallbox' obj={contents2}/>
          </div>
          <div className='right2'>
            <SmallBox className='smallbox' obj={contents3}/>
            <SmallBox className='smallbox' obj={contents4}/>
        </div>
      </div>
    </div>
  )
}

export default CenterDiv;