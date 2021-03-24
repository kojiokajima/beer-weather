import React, {useState} from 'react'
import axios from 'axios'

function Hourly(props) {
  
  const [city, setcity] = useState('Vancouver')

  const url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${process.env.REACT_APP_BEER_WEATHER_APP}&q=Vancouver&num_of_days=2&tp=1&format=json`
    axios.get(url).then((response) => {
      console.log(response.data)

   })

  return (
    <>
    <h1>{city}</h1>
    <div>
      <h2>Time</h2>
      <img />
      <p>Temp</p>
    </div>
    </>
  )
}

export default Hourly

