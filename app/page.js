'use client';
import styles from './page.module.css';
import { useEffect } from 'react';
import { fetchWeather, fetchCity } from './store/slices/weather';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { InputField } from './components/cityInput';
import React from 'react';
import { Sparklines } from 'react-sparklines';


export default function Home() {
  const [lineData, setLineData] = useState('');
  
  const weather = useSelector((state) => state.weather.weather);
  const testLog = weather;
  console.log('weather', testLog);

  


  
  if (weather == null) {
    return (
      <main>
        <InputField />
      </main>
  )
  } else {
    return (
      <main>
        <InputField />
        <p>{weather.list.map((datum) => datum.main.temp)}</p>
      </main>
    )
  }

  
}