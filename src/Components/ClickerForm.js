import React, { useState } from 'react';
import './ClickerForm.css';

function ClickerForm(props) {

  const [name,setName] = useState('');
  const [url,setURL] = useState('');
  const [counter,setCounter] = useState('');

  function nameHandler(e){
    setName(e.target.value);
  }

  function urlHandler(e){
    setURL(e.target.value);
  }

  function counterHandler(e){
    setCounter(e.target.value);
  }

  function submitHandler(e){
    e.preventDefault();
    const newData = {
      name,url,counter:+counter
    };
    props.onSubmit(newData);

    setName('');
    setURL('');
    setCounter('');
  }

  return (
    <div className='clicker-form'>
        <form onSubmit = {submitHandler} >
            <label>Cat Name</label>
            <input value = {name} onChange={nameHandler} type="text" />

            <label>Cat Image</label>
            <input value = {url} onChange={urlHandler} type="text" />

            <label>Cat Clicks</label>
            <input value={counter} onChange={counterHandler} type="number" />
            <button>Save</button>
        </form>
    </div>
  )
}

export default ClickerForm