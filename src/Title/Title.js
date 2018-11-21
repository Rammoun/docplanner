import React from 'react';
import './Title.css';

const Title=(props)=>{
  return(
    <h1 className='title-green'>{props.children}</h1>
  )
}

export default Title;