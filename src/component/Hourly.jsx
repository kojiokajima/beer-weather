import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { SearchContext } from '../Inae'

function Hourly(props) {
  const [searchedCity, setSearchedCity] = useContext(SearchContext)
  const [city, setcity] = useState('Vancouver')
  const date = new Date();
  const currentHour = date.getHours();
  const [time, setTime] = useState('')
  const [hourlyTemp, setHourlyTemp] = useState('')
  const [hourlyIcon, setHourlyIcon] = useState('')
  const [hourlyData, setHourlyData] = useState([])

  // console.log(currentHour)

useEffect(() => {
  
  const url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${process.env.REACT_APP_BEER_WEATHER_APP}&q=${searchedCity}&num_of_days=2&tp=1&format=json`
    axios.get(url).then((response) => {
      console.log('hourly data: ' , response.data)
      // console.log(response.data.data.weather[0].hourly)
      // clnsole.log()
      const startTime = response.data.data.weather[0].hourly[currentHour]
      const startTimeForSet = response.data.data.weather[0].hourly[currentHour].time.slice(0, -2)
      setTime(startTimeForSet);
      setHourlyTemp(startTime.tempC)


      const loadedHourlyData =[];
      const testData = response.data.data.weather[0].hourly
      // console.log(testData)
      for(let hourly in testData) {
        // console.log(testData[hourly])
        loadedHourlyData.push({
          id: hourly,
          time: testData[hourly].time.slice(0, -2),
          tempC: testData[hourly].tempC,
          iconURL: testData[hourly].weatherIconUrl[0].value
        })
      }
      loadedHourlyData[0].time = "0";
      setHourlyData(loadedHourlyData)
      
      console.log("checkTime:",startTime )
   })
  
}, [searchedCity])

// console.log(hourly)
// console.log(hourly.time, hourly.tempC)
    console.log(hourlyData)
  return (
    <>
    <div className="weather-time">
             {hourlyData.map(hourly => (

            <div className="weather-content">
                <h3 className="time-text">{hourly.time}</h3>
                <img src={hourly.iconURL} className="weather-content-icon" />
                <h3 className="temp-text">{hourly.tempC}°C</h3>
            </div>
         
             )) }
    </div>
    {/* <h1>{city}</h1>
    <div>
      <h2>Time</h2>
      <img />
      <p>Temp</p>
    </div> */}
    </>
  )
}

export default Hourly

