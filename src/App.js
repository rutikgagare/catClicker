import './App.css';
import { useState } from 'react';
import ClickerForm from './Components/ClickerForm';
import CatGallary from './Components/CatGallary';
import CatList from './Components/CatList';
import CatDisplay from './Components/CatDisplay';

function App() {

  const dummyData = [
    { 
      id: 1, 
      counter: 5, 
      name: 'Cat 1', 
      data: 'Ginger1', 
      age: 'infant', 
      url: 'https://images.unsplash.com/photo-1460572894071-bde5697f7197?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc2lhbiUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
    },

    {
      id: 2,
      counter: 2,
      name: 'Cat 2',
      data: 'Ginger2',
      age: 'infant',
      url: 'https://images.unsplash.com/photo-1614538899890-1a0d25d62e22?ixlib=rb 4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNpYW4lMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },

    { 
      id: 3, 
      counter: 7, 
      name: 'Cat 3', 
      data: 'Ginger3', 
      age: 'infant', 
      url: 'https://images.unsplash.com/photo-1593018113452-918597f50f51?ixlib=rb4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNpYW4lMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
    }

  ];

  const [data, setData] = useState(dummyData);
  
  const addDataHandler = (newData) => {

    const count = data.filter((item) => item.name === newData.name);

    if (count.length === 0) {
      setData((prevState) => [...prevState, newData]);
    }

    else {

      const FormChangeData = data.map(obj => {
        if (obj.name === newData.name) {
          return { ...obj, counter: newData.counter, url: newData.url };
        }
        else {
          return { ...obj };
        }
      });

      setData(FormChangeData);
    }
  }

  let displayObject = {
    name:"Cat 1",
    counter:5,
    url:'https://images.unsplash.com/photo-1593018113452-918597f50f51?ixlib=rb4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNpYW4lMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  }

  const [display, setDisplay] = useState(displayObject);

  const onClickDataChangeHandler = (catName) =>{

    const clickIncrementData = data.map(obj => {

      if (obj.name === catName) {
        return { ...obj, counter:++obj.counter};
      }
      else {
        return { ...obj };
      }
    });
    
    setData(clickIncrementData);

    const displayData = data.filter((item)=>{
      return item.name === catName;
    });

    setDisplay({
      name:displayData[0].name,
      counter:displayData[0].counter,
      url:displayData[0].url
    });
  }


  return (
    <div className="app">
      
      <hr />
      <h1>Cat Clicker App</h1>
      <hr />

      <div className='clicker'>
        <CatList items = {data} changedCatDetails = {onClickDataChangeHandler}></CatList>
        <CatDisplay name = {display.name} counter = {display.counter} url = {display.url}></CatDisplay>
        <ClickerForm onSubmit={addDataHandler}></ClickerForm>
      </div>

      <hr />
      <h1>Cat Image Gallary</h1>
      <hr />
      <CatGallary items={data} changedCatDetails = {onClickDataChangeHandler}></CatGallary>
    </div>
  );
}

export default App;
