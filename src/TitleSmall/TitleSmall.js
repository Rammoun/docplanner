import React from 'react';
import './TitleSmall.css';

const Title=(props)=>{
  return(
    <h2 className='title-green'>{props.children}</h2>
  )
}

export default Title;