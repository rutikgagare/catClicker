import React from 'react';
import './ListItem.css';

function ListItem(props) {
  const onClickDataChangeHandler = () =>{
    props.changedCatDetails(props.name);
  }
  return (
    <div className='list-item' onClick={onClickDataChangeHandler}>
        <h5>{props.name}</h5>
        <button>{props.counter}</button>
    </div>
  )
}

export default ListItem;