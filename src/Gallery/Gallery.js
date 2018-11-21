import React from 'react';
import GalleryBox from '../GalleryBox/GalleryBox';
import './Gallery.css';



const contents=[
  {
    image:'https://www.docplanner.com/images/warsaw.png',
    link:'https://www.docplanner.com//career?&loc=poland#jobs-offers',
    alt:'Warsaw'
  },
  {
    image:'https://www.docplanner.com/images/barcelona.png',
    link:'https://www.docplanner.com//career?&loc=spain#jobs-offers',
    alt:' Barcelona '
  },
  {
    link:'https://www.docplanner.com//career?&loc=turkey#jobs-offers',
    image:'https://www.docplanner.com/images/istanbul.png',  
    alt:' Istanbul '
  },
  {
    image:'https://www.docplanner.com/images/rome.png',
    link:'https://www.docplanner.com/career?&loc=italy#jobs-offers',
    alt:' Rome '
  },
  {
    image:'https://www.docplanner.com/images/mexico-city.png',
    link:'https://www.docplanner.com//career?&loc=mexico#jobs-offers',
    alt:'Mexico City'
  },
  {
    image:'https://www.docplanner.com/images/curitiba.png',
    link:'https://www.docplanner.com//career?&loc=brazil#jobs-offers',
    alt:'Curitiba'
  }
]


/*const contents1={
  image:'https://www.docplanner.com/images/warsaw.png',
  link:'https://www.docplanner.com//career?&loc=poland#jobs-offers',
  alt:'Warsaw'
}
const contents2={
  image:'https://www.docplanner.com/images/barcelona.png',
  link:'https://www.docplanner.com//career?&loc=spain#jobs-offers',
  alt:' Barcelona '
}
const contents3={
  link:'https://www.docplanner.com//career?&loc=turkey#jobs-offers',
  image:'https://www.docplanner.com/images/istanbul.png',  
  alt:' Istanbul '
}
const contents4={
  image:'https://www.docplanner.com/images/rome.png',
  link:'https://www.docplanner.com/career?&loc=italy#jobs-offers',
  alt:' Rome '
}
const contents5={
  image:'https://www.docplanner.com/images/mexico-city.png',
  link:'https://www.docplanner.com//career?&loc=mexico#jobs-offers',
  alt:'Mexico City'
}
const contents6={
  image:'https://www.docplanner.com/images/curitiba.png',
  link:'https://www.docplanner.com//career?&loc=brazil#jobs-offers',
  alt:'Curitiba'
}*//*
const Actors = (props) => 
  props.actorsList.map((currentActor, i) =>
    <div key={i}> // key is required to distinguish elements (must be unique)
      <Actor actor={currentActor} />
    </div>
  )*/

const Gallery=()=>{
  return(
    <div className='gallery'>
      {contents.map((cont)=><GalleryBox obj={cont}/>)}
    </div>
  )
}/*
  const Gallery=()=>{
    return(
      <div className='gallery'>
      <GalleryBox obj={contents1}/>
      <GalleryBox obj={contents2}/>
      <GalleryBox obj={contents3}/>
      <GalleryBox obj={contents4}/>
      <GalleryBox obj={contents5}/>
      <GalleryBox obj={contents6}/>
    </div>
  )
}*/

export default Gallery;