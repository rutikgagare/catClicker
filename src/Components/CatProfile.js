import React from 'react';
import './CatProfile.css';

function CatProfile(props) {
  const onClickDataChangeHandler = () =>{
    props.changedCatDetails(props.name);
  }

  return (
    <div className='cat-profile' onClick = {onClickDataChangeHandler}>
        <div className="cat-profile__info">
          <h5>{props.name}</h5>
          <h5>Number of times Clicked : {props.counter}</h5>
        </div>
        <img src = {props.url} alt = "No Image Found"></img>
    </div>
  )
}

export default CatProfile