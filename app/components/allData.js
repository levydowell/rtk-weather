'use client';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { useDispatch, useSelector } from 'react-redux';

export const AllData = () => {
  const weather = useSelector((state) => state.weather.weather);
  const city = useSelector((state) => state.weather.city);


  return weather.map((cityWeather) => {
    console.log('cityweather', cityWeather);
    return (
    <div className='graph-container' key={cityWeather.city.name}>

      <div className='graphs city-name'>
        <h4>{cityWeather.city.name}</h4>
      </div>

      <div className='graphs'>
        <h2>Temperature</h2>
        <Sparklines data={cityWeather.list.map((datum) => datum.main.temp)} width={20} height={10} margin={1}>
          <SparklinesLine color='grey' style={{strokeWidth: 0.5, fill: 'none'}}/>
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </div>

      <div className='graphs'>
        <h2>Pressure</h2>
        <Sparklines data={cityWeather.list.map((datum) => datum.main.pressure)} width={20} height={10} margin={1}>
          <SparklinesLine color='red' style={{strokeWidth: 0.5, fill: 'none'}}/>
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </div>

      <div className='graphs'>
        <h2>Humidity</h2>
        <Sparklines data={cityWeather.list.map((datum) => datum.main.humidity)} width={20} height={10} margin={1}>
          <SparklinesLine color='blue' style={{strokeWidth: 0.5, fill: 'none'}}/>
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </div>
  </div>
    )
  })


}