import React from 'react';
import './ParagraphHead.css'

const ParagraphHead=(props)=>{
  return (
    <p className='headP'>{props.children}</p>
  )
}

export default ParagraphHead;