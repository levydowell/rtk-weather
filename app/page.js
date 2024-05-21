'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { InputField } from './components/cityInput';
import { AllData } from './components/allData';
import React from 'react';

export default function Home() {
  
  const weather = useSelector((state) => state.weather.weather);
  
  if (weather === null) {
    return (
      <main>
        <InputField />
      </main>
  )
  } else {
    return (
      <main>
        <div className='set-margin'>
         <InputField />
         <AllData />
        </div>
      </main>
    )
  }

}