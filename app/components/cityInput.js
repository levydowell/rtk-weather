'use client';
import 'bootstrap/dist/css/bootstrap.css';
import { fetchWeather, fetchCity } from '../store/slices/weather';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const InputField = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  /**
   * dispatch `fetchCity` for async api call to retrieve city coords.
   * dispatch `fetchWeather` to get all weather information.
   */
  const handleClick = () => {
    dispatch(fetchCity(input))
     .then((response) =>{
      const latitude = response.payload[0].lat;
      const longitude = response.payload[0].lon;
      dispatch(fetchWeather( {latitude, longitude} ))

     }) 
  };

  // returns component with searchbar with event handler
  return (
    <div className='searchbar mb-3 input-group'>
      <input type='text' className='form-control' placeholder='Enter City'
      onChange={(e) => setInput(e.target.value)} />
      <button className='btn btn-primary' type='button' onClick={handleClick}>Search</button>
    </div>

)
}

