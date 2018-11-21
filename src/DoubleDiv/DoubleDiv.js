import React from 'react';
import './DoubleDiv.css'

const DoubleDiv=(props)=>{
  return (
    <div className='double'>
      {props.children}
    </div>    
  )
  
}
export default DoubleDiv;