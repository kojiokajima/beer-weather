import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { SearchContext } from '../Inae'


function Hourly(props) {
  // const [searchedCity, setSearchedCity] = useContext(SearchContext)
  const [city, setcity] = useState('Vancouver')
  const date = new Date();
  const currentHour = date.getHours();
  const [time, setTime] = useState('')
  const [hourlyTemp, setHourlyTemp] = useState('')
  const [hourlyIcon, setHourlyIcon] = useState('')
  const [hourlyData, setHourlyData] = useState([])

  // console.log(currentHour)

useEffect(() => {
  
  const url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${process.env.REACT_APP_BEER_WEATHER_APP}&q=${props.value}&num_of_days=2&tp=1&format=json`
    axios.get(url).then((response) => {
      console.log(url);
      console.log('hourly data: ' , response.data)
      console.log(response.data.data)
      console.log(response.data.data.weather)
      console.log(response.data.data.weather[0])
      console.log(response.data.data.weather[0].hourly)
      // console.log(response.data.data.weather[0].hourly)
      // clnsole.log()
      // const startTime = response.data.data.weather[0].hourly[currentHour]
      // const startTimeForSet = response.data.data.weather[0].hourly[currentHour].time.slice(0, -2)
      // setTime(startTimeForSet);
      // setHourlyTemp(startTime.tempC)


      const loadedHourlyData =[];
      const testData = response.data.data.weather[0].hourly
      const date2 = response.data.data.weather[1].hourly

      // console.log(testData)
      for(let hourly in testData) {
        // console.log(testData[hourly])
        loadedHourlyData.push({
          id: parseInt(date2[hourly].time.slice(0, -2)),
          time: testData[hourly].time.slice(0, -2),
          tempC: testData[hourly].tempC,
          iconURL: testData[hourly].weatherIconUrl[0].value
        })
      }
      for(let hourly2 in date2) {
        // console.log(testData[hourly])
        
        let key = 24;
        // key++
        loadedHourlyData.push({
          id: parseInt(date2[hourly2].time.slice(0, -2)) + key ,
          time: date2[hourly2].time.slice(0, -2),
          tempC: date2[hourly2].tempC,
          iconURL: date2[hourly2].weatherIconUrl[0].value
        })
        // key+=1
      }
      console.log(loadedHourlyData)
     for(let i=0; i < loadedHourlyData.length;i++ ){
        if(loadedHourlyData[i].time  === "" ) {
          loadedHourlyData[i].time = "0"
        };

     }
      loadedHourlyData[0].id = 0;
      loadedHourlyData[24].id = 24;
      setHourlyData(loadedHourlyData)
      
      // console.log("checkTime:",startTime )
   })
  console.log('check:', props.value)
}, [props.value])

// console.log(hourly)
// console.log(hourly.time, hourly.tempC)
    console.log(hourlyData)
  return (
    <>
    <div className="weather-time">
             {hourlyData.map((hourly) => (

            <div className="weather-content">
                <h3 className="time-text">{hourly.time}</h3>
                <img src={hourly.iconURL} className="weather-content-icon" />
                <h3 className="temp-text">{hourly.tempC}°C</h3>
            </div>
         
             )) }
    </div>

    </>
  )
}

export default Hourly

