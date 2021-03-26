import React, { useEffect, useState } from "react";
import beerData from './beerData'
import Beer from './sass/img/coronas.png';
import './sass/main.scss'

// Weathers
// sunny: Clear
// cloudy: Mist, Smoke, Haze, Dust Fog Sand, Ash, Squall, Tornado, Clouds
// rainy: Thunderstorm, Drizzle, Rain, Snow

// Temps
//  < 15: cold
//  15 <= temp <= 25: moderate
//  < 25: warm

const Test = (props) => {
  const [tempType, setTempType] = useState('warm')
  const [temp, setTemp] = useState(20)
  const [weather, setWeather] = useState('Clear')
  const [data, setData] = useState(beerData.cold.sunny)
  const random =  Math.floor(Math.random() * 5)

  console.log("WeatherDataL ", props.weatherData);

  const setWeatherAndTempType = () => {
    if(props.weatherData.weather[0].main === 'Clear') {
      setWeather('sunny')
    } else if (props.weatherData.weather[0].main === 'Thunderstorm' || props.weatherData.weather[0].main === 'Drizzle' || props.weatherData.weather[0].main === 'Rain' || props.weatherData.weather[0].main === 'Snow' ) {
      setWeather('rainy')
    } else if (props.weatherData.weather[0].main === 'Clouds') {
      setWeather('cloudy')
    }

    setTemp(props.weatherData.main.temp)
  
    if (props.weatherData.main.temp < 15) {
      setTempType('cold')
    } else if (props.weatherData.main.temp >= 15 && props.weatherData.main.temp <= 25) {
      setTempType('moderate')
    }
  }

  useEffect(() => {
    setWeatherAndTempType()

    if (tempType === 'cold') {
      switch(weather){
        case 'sunny':
          setData(beerData.cold.sunny)
          break;
        case 'cloudy':
          setData(beerData.cold.cloudy)
          break;
        case 'rainy':
          setData(beerData.cold.rainy)
          break;
        default:
          break;
      }
    } else if (tempType === 'moderate') {
      switch(weather){
        case 'sunny':
          setData(beerData.moderate.sunny)
          break;
        case 'cloudy':
          setData(beerData.moderate.cloudy)
          break;
        case 'rainy':
          setData(beerData.moderate.rainy)
          break;
        default:
          break;
      }
    } else if (tempType === 'warm') {
      switch(weather){
        case 'sunny':
          setData(beerData.warm.sunny)
          break;
        case 'cloudy':
          setData(beerData.warm.cloudy)
          break;
        case 'rainy':
          setData(beerData.warm.rainy)
          break;
        default:
          break;
      }
    }
  }, [props.weatherData, tempType, weather])
  
  useEffect(() => {
    props.fetchWeatherData()
    setWeatherAndTempType()
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