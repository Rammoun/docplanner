import React from 'react';
import './BigBox.css';
    
const BigBox=(props)=>{
    return (
        <div className={props.obj.color}>
            <h5>{props.obj.headerS}</h5>
            <h2>{props.obj.headerB}</h2>
            <div className='lowline'>
                {props.children}
                <img src={props.obj.image}/>
            </div>            
        </div>
    )
}
export default BigBox;