import React from 'react';
import './CatDisplay.css';

function CatDisplay(props) {
  return (
    <div className='cat-display'>
        <h5>{props.name}</h5>
        <h5>Numbers of times clicked : {props.counter}</h5>
        <img src={props.url} />
    </div>
  )
}

export default CatDisplay