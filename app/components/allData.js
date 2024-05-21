'use client';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * 
 * @returns react component containing all of the weather data for each city entered.
 */
export const AllData = () => {
  const weather = useSelector((state) => state.weather.weather);

  /**
   * 
   * @param {*} data The data list returned from openweather api.
   * @param {*} avgType The weather distinction nested within the data list. Naming convention must be
   * exactly the same as json layout, i.e `temp`, `pressure`, or `humidity`.
   * @returns The average of the sum of all data points for avgType.
   */
  const findAvg = (data, avgType) => {
    const typeData = data.map((datum) => datum.main[avgType]);
    console.log('here', typeData, typeData.length);
    const sum = typeData.reduce(
      (acc, value) => acc + value, 0,
    );

    return Math.round(sum/typeData.length);
  }

  return weather.map((cityWeather) => {
    return (
    <div className='graph-container' key={cityWeather.city.name}>

      <div className='graphs city-name' key={cityWeather.city.name}>
        <h4>{cityWeather.city.name}</h4>
      </div>

      <div className='graphs'>
        <h5>Temperature</h5>
        <Sparklines data={cityWeather.list.map((datum) => datum.main.temp)} width={20} height={10} margin={1}>
          <SparklinesLine color='grey' style={{strokeWidth: 0.5, fill: 'none'}}/>
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p>{findAvg(cityWeather.list, 'temp')} F</p>
      </div>

      <div className='graphs'>
        <h5>Pressure</h5>
        <Sparklines data={cityWeather.list.map((datum) => datum.main.pressure)} width={20} height={10} margin={1}>
          <SparklinesLine color='red' style={{strokeWidth: 0.5, fill: 'none'}}/>
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p>{findAvg(cityWeather.list, 'pressure')} hPa</p>
      </div>

      <div className='graphs'>
        <h5>Humidity</h5>
        <Sparklines data={cityWeather.list.map((datum) => datum.main.humidity)} width={20} height={10} margin={1}>
          <SparklinesLine color='blue' style={{strokeWidth: 0.5, fill: 'none'}}/>
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <p>{findAvg(cityWeather.list, 'humidity')} %</p>
      </div>
  </div>
    )
  })


}