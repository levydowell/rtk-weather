import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

/**
 * createAsyncThunk that fetches the latitude and longitude of entered city.
 */
export const fetchCity = createAsyncThunk('weather/fetchCity', async (cityName) => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=b68f55460cf44818aabff0456c2d1963`);
    return response.data;
  } catch (error) {
    console.log(error('Error fetching city name: ', error));
  }
});

/**
 * createAsyncThunk that fetches weather data from the lat/lon coordinates of selected city.
 */
export const fetchWeather = createAsyncThunk('weather/fetchData', async ({latitude, longitude}) => {
  try {

    const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=b68f55460cf44818aabff0456c2d1963`);
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
});

/**
 * Redux slice to store the state of the weather and selected city.
 */
export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: [],
    city: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  //reducers for asyncThunks
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weather.push(action.payload);
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
    builder
      .addCase(fetchCity.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.city = action.payload;
        state.error = null;
      })
      .addCase(fetchCity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;