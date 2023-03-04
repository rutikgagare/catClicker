import React from 'react';
import CatProfile from './CatProfile';
import'./CatGallary.css';

function CatGallary(props) {

  const onClickDataChangeHandler = (name)=>{
    console.log(name);
    props.changedCatDetails(name);
  }

  return (
    <ul className='cat-gallary'>
        {props.items.map( (item) => {
            return <CatProfile 
                        key = {item.id}
                        name = {item.name} 
                        counter = {item.counter} 
                        url = {item.url}
                        changedCatDetails = {onClickDataChangeHandler}
            ></CatProfile>
        })}
    </ul>
  )
}


export default CatGallary;