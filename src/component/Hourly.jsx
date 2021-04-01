import React, { useState, useEffect, useContext} from 'react'
import {SearchContext} from '../App'
import axios from 'axios'
// import { SearchContext } from '../Inae'


function Hourly(props) {
  
  const [searchedCity, setSearchedCity] = useContext(SearchContext)
  // const date = new Date();
  // const currentHour = date.getHours();
  const [hourlyData, setHourlyData] = useState([])

  useEffect(() => {

    const url = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${process.env.REACT_APP_BEER_WEATHER_APP}&q=${searchedCity}&showlocaltime=yes&num_of_days=2&tp=1&format=json`
    axios.get(url).then((response) => {
      // console.log(url);
      console.log('hourly data: ', response.data)

      const startTime = parseInt(response.data.data.time_zone[0].localtime.slice(10, 13));
      const loadedHourlyData = [];
      console.log('searched city:',searchedCity); 
      // console.log(startTime)
      function get48HourlyData() {

        const date1 = response.data.data.weather[0].hourly
        const date2 = response.data.data.weather[1].hourly

        for (let hourly in date1) {
          // console.log(date1[hourly])
          loadedHourlyData.push({
            id: parseInt(date1[hourly].time.slice(0, -2)),
            time: date1[hourly].time.slice(0, -2),
            tempC: date1[hourly].tempC,
            iconURL: date1[hourly].weatherIconUrl[0].value
          })
        }

        for (let hourly2 in date2) {
          // console.log(testData[hourly])
          let key = 24;
          loadedHourlyData.push({
            id: parseInt(date2[hourly2].time.slice(0, -2)) + key,
            time: date2[hourly2].time.slice(0, -2),
            tempC: date2[hourly2].tempC,
            iconURL: date2[hourly2].weatherIconUrl[0].value
          })
        }

        for (let j = 0; j < loadedHourlyData.length; j++) {
          if (loadedHourlyData[j].time === "") {
            loadedHourlyData[j].time = "0"
          };
          
        }
        loadedHourlyData[0].id = 0;
        loadedHourlyData[24].id = 24;
      }
    
      get48HourlyData();

      console.log(loadedHourlyData)

      function setLocal24HoursData() {

        const fromLocalTimeArr = [];
        for (let i = startTime; i < startTime + 24; i++) {
          fromLocalTimeArr.push(loadedHourlyData[i])
        }
        console.log('LocalTime24hArr:', fromLocalTimeArr)
        setHourlyData(fromLocalTimeArr)

      }

      setLocal24HoursData();

    }).catch(err => {
      alert('That city is not exist! Please enter valid city!')
    })
    console.log('checkCityInHourly:', props.value)
  }, [searchedCity])


  // console.log(hourlyData)
  return (
    <>
      <div className="weather-time">
        {hourlyData.map((hourly, id) => (
          <div className="weather-content" key={id}>
            <h3 className="time-text">{hourly.time}</h3>
            <img src={hourly.iconURL} className="weather-content-icon" alt="weather icon" />
            <h3 className="temp-text">{hourly.tempC}°C</h3>
          </div>

        ))}
      </div>
    </>
  )
}

export default Hourly

