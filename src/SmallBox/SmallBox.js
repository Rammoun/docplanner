import React from 'react';
import './SmallBox.css';
import TitleSmall from '../TitleSmall/TitleSmall';

const SmallBox=(props)=>{
  return(
    <div className='smallbox'>
      <img src={props.obj.image}/>
      <TitleSmall>{props.obj.title}</TitleSmall>
      <p>{props.obj.txt}</p>
    </div>
  )
}

export default SmallBox;