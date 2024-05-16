'use client';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { useDispatch, useSelector } from 'react-redux';

export const AllData = () => {
  const weather = useSelector((state) => state.weather.weather);

  let tempData = [];
  // weather.list.forEach((e) => {
  // if (weather.list.indexOf(e) % 3 === 0) {
  //     tempData.push(e);
  //   }
  // });

  return weather.map((cityWeather) => {
    console.log('cityweather', cityWeather);
    return (
    <div className='graphs' key={cityWeather.city.name}>
      <Sparklines data={cityWeather.list.map((datum) => datum.main.temp)} width={20} height={10} margin={1}>
        <SparklinesLine />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
  </div>
    )
  })


}