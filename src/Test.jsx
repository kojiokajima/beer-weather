import React, { useContext, useEffect, useState, memo } from "react";
import beerData from './beerData'
import Beer from './sass/img/coronas.png';
import './sass/main.scss'
import { TempContext, WeatherContext } from "./Inae";

// Weathers
// sunny: Clear
// cloudy: Mist, Smoke, Haze, Dust Fog Sand, Ash, Squall, Tornado, Clouds
// rainy: Thunderstorm, Drizzle, Rain, Snow

// Temps
//  < 15: cold
//  15 <= temp <= 25: moderate
//  < 25: warm

const Test = (props) => {
  
  // -----------temporary-----------
  const defaultWeatherData = {
    weather: [
      {
        main: ""
      }
    ],
    main: {
      temp: ''
    }
  }
  const [tempType, setTempType] = useState('warm')
  const [temp, setTemp] = useState(20)
  const [weather, setWeather] = useState('Clear')
  const [weatherData, setWeatherData] = useState(defaultWeatherData)
  const [data, setData] = useState(beerData.cold.sunny)
  const random =  Math.floor(Math.random() * 5)



  const setWeatherAndTempType = () => {
    console.log("----setWeatherAndTempType CALLED----")
    console.log("---------", props.weatherData.weather[0].main)
    console.log("---------", props.weatherData.main.temp)
    // if(weatherData.weather[0].main === 'Clear') {
    if(props.weatherData.weather[0].main === 'Clear') {
      setWeather('sunny')
    // } else if (weatherData.weather[0].main === 'Thunderstorm' || weatherData.weather[0].main === 'Drizzle' || weatherData.weather[0].main === 'Rain' || weatherData.weather[0].main === 'Snow' ) {
    } else if (props.weatherData.weather[0].main === 'Thunderstorm' || props.weatherData.weather[0].main === 'Drizzle' || props.weatherData.weather[0].main === 'Rain' || props.weatherData.weather[0].main === 'Snow' ) {
      setWeather('rainy')
    // } else if (weatherData.weather[0].main === 'Clouds') {
    } else if (props.weatherData.weather[0].main === 'Clouds') {
      setWeather('cloudy')
    }

    // setTemp(weatherData.main.temp)
    setTemp(props.weatherData.main.temp)
  
    // if (weatherData.main.temp < 15) {
    if (props.weatherData.main.temp < 15) {
      setTempType('cold')
    // } else if (weatherData.main.temp >= 15 && weatherData.main.temp <= 25) {
    } else if (props.weatherData.main.temp >= 15 && props.weatherData.main.temp <= 25) {
      setTempType('moderate')
    }
  }

  
  
  console.log("----TEST RENDERED----")
  console.log("temp tempType weather: ", temp, tempType, weather)
  console.log("props.weatherData: ", props.weatherData )
  console.log("----/TEST RENDERED----")

  useEffect(() => {
    console.log("----ANOTHER USEEFFECT CALLED----")
    setWeatherAndTempType()

    if (tempType === 'cold') {
      switch(weather){
        case 'sunny':  // --> this will change
          setData(beerData.cold.sunny)
          break;
        case 'cloudy':  // --> this will change
          setData(beerData.cold.cloudy)
          break;
        case 'rainy':  // --> this will change
          setData(beerData.cold.rainy)
          break;
        default:
          break;
      }
    } else if (tempType === 'moderate') {
      switch(weather){
        case 'sunny':  // --> this will change
          setData(beerData.moderate.sunny)
          break;
        case 'cloudy':  // --> this will change
          setData(beerData.moderate.cloudy)
          break;
        case 'rainy':  // --> this will change
          setData(beerData.moderate.rainy)
          break;
        default:
          break;
      }
    } else if (tempType === 'warm') {
      switch(weather){
        case 'sunny':  // --> this will change
          setData(beerData.warm.sunny)
          break;
        case 'cloudy':  // --> this will change
          setData(beerData.warm.cloudy)
          break;
        case 'rainy':  // --> this will change
          setData(beerData.warm.rainy)
          break;
        default:
          break;
      }
    }
  }, [props.weatherData])
  

  useEffect(() => {
    props.fetchWeatherData()  // --> GET WEATHER DATA FROM API
    // setWeatherData(props.weatherData)
    setWeatherAndTempType()


    console.log("----USEEFFECT EVOKED----")
    console.log("temp tempType weather: ", temp, tempType, weather)
    console.log("props.weatherData: ", props.weatherData )
    console.log("----/USEEFFECT EVOKED----")

  }, [])

  return (
    <div className="beer-info">
            <img src={Beer} className="beer-img" />
            <div className="beer-text">
                <div className="beer-title">
                    <h2 className="beer-name">{data[random][0]}</h2>
                    <h3 className="beer-name2"> is perfect to this weather!</h3>
                </div>
                <div className="beer-contents">
                    <div className="beer-describe">
                        <h3 className="question">Style: </h3>
                        <h3 className="answer">{data[random][1]}</h3>
                    </div>
                    <div className="beer-describe">
                        <h3 className="question">IBU: </h3>
                        <h3 className="answer star">{data[random][3]} </h3>
                        {/* <h3 className="answer star">★ ★ ★ ★ </h3> */}
                    </div>
                    <div className="beer-describe">
                        <h3 className="question">Description: </h3>
                        <h3 className="answer">{data[random][4]}</h3>
                    </div>
                
                <button className="btn-link">Go to Homepage</button>
                </div>

            </div>

        </div>
  );
};

export default Test;
