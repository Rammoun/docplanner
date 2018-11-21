import React from 'react';
import './GalleryBox.css';

const GalleryBox=(props)=>{
  return(
    <div className='imgbox'>
      <a className='imglink' href={props.obj.link}>
        <img src={props.obj.image}/>
        <div className='footer'>
          <span className='imgalt'>{props.obj.alt}</span>
          <button className='btn'>See Openings</button>
        </div>
      </a> 
    </div>
  )
}

export default GalleryBox;