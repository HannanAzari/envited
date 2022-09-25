import React from 'react';
import './create.css'
import { Link } from "react-router-dom";


const Create = ({ inputs, setInputs}) => {
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs('')

  }
  return (
    <div className='create'>
      <form className='form' onSubmit={handleSubmit}>
      <label>Event name:
      <br />
      <input 
        type="text" 
        name="eventName" 
        placeholder='Enter event name'
        value={inputs.eventName || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Host name:
      <br />
        <input 
          type="text" 
          name="hostName" 
          placeholder='Enter host name'
          value={inputs.hostName || ""} 
          onChange={handleChange}
        />
        </label>
        <label className='location'>Location:
        <br />
        <input 
          
          type="text" 
          name="street" 
          placeholder='Street'
          value={inputs.street || ""} 
          onChange={handleChange}
        />
        <br />
        <input 
          type="text" 
          name="suburb" 
          placeholder='Suburb'
          value={inputs.suburb || ""} 
          onChange={handleChange}
        />
        <br />
        <input 
          type="text" 
          name="state" 
          placeholder='State'
          value={inputs.state || ""} 
          onChange={handleChange}
        />
        <br />
        <input 
          type="number" 
          name="postcode" 
          placeholder='Postcode'
          value={inputs.postcode || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Select an event photo:
        <br />
        <input 
          type="file" 
          name="eventImg" 
          value={inputs.eventImg || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="datetime-local" id="birthdaytime" name="birthdaytime"></input>
        <Link to="/event">
          <button type='submit'>Submit</button>
        </Link>
    </form>
    </div>
  )
}

export default Create