import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Hourly(props) {
  
  const [city, setcity] = useState('Vancouver')
  const date = new Date();
  const currentHour = date.getHours();
  const [time, setTime] = useState('')
  const [hourlyTemp, setHourlyTemp] = useState('')
  const [hourlyIcon, setHourlyIcon] = useState('')
  // console.log(currentHour)

useEffect(() => {
  
  const url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${process.env.REACT_APP_BEER_WEATHER_APP}&q=Vancouver&num_of_days=2&tp=1&format=json`
    axios.get(url).then((response) => {
      console.log('hourly data: ' , response.data)
      // console.log(response.data.data.weather[0].hourly[currentHour])
      
      const startTime = response.data.data.weather[0].hourly[currentHour + 1]
      const startTimeForSet = response.data.data.weather[0].hourly[currentHour + 1].time.slice(0, -2)
      setTime(startTimeForSet);
      setHourlyTemp(startTime.tempC)
      
   })
  
}, [])

  return (
    <>
    <div className="weather-time">
            <div className="weather-content">
                <h3 className="time-text">{time}</h3>
                <img src="https://logodix.com/logo/390958.png" className="weather-content-icon" />
                <h3 className="temp-text">{hourlyTemp}°C</h3>
            </div>
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

