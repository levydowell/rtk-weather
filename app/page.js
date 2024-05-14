'use client';
import styles from './page.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { fetchWeather, fetchCity } from './store/slices/weather';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


export default function Home() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.weather);
  const city = useSelector((state) => state.weather.city);
  const [input, setInput] = useState();

  const testLat = 44.34;
  const testLon = 10.99;
  
  useEffect(() => {
		dispatch(fetchWeather());
	}, [dispatch]);


  const handleClick = () => {
    dispatch(fetchCity(input))
     .then((response) =>{
      console.log(response.payload);
      const latitude = response.payload[0].lat;
      const longitude = response.payload[0].lon;
      console.log(latitude, longitude);
      dispatch(fetchWeather( {latitude, longitude} ))
      //get rid of this last chain when finished
       .then((response) => {
        console.log(response.payload);
       })
     }) 
  };

  return (
    <main>
      <div>
        <input placeholder='Enter coords'
        onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleClick}>Search</button>
      </div>
    </main>
  )
  
}