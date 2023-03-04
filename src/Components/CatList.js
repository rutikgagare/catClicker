import React from 'react';
import './CatList.css';
import ListItem from './ListItem';

function CatList(props) {
const onClickDataChangeHandler = (name)=>{
  props.changedCatDetails(name);
}

  return (
    <div className='cat-list'>
        {
          props.items.map((item)=>{
            return <ListItem 
              name = {item.name} 
              counter = {item.counter}
              changedCatDetails = {onClickDataChangeHandler}>
            </ListItem>
          })
        }
    </div>
  )
}

export default CatList;