'use client';
import styles from './page.module.css';
import { useEffect } from 'react';
import { fetchWeather, fetchCity } from './store/slices/weather';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { InputField } from './components/cityInput';
import { AllData } from './components/allData';
import React from 'react';


export default function Home() {
  
  const weather = useSelector((state) => state.weather.weather);
  
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
        <AllData />
      </main>
    )
  }

  
}