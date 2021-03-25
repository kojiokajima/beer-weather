import React, { useContext, useEffect, useState } from "react";
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

const Test = () => {
  // const [temp, setTemp] = useContext(TempContext)
  // const [tempType, setTempType] = useState('warm')
  // const [weather, setWeather] = useContext(WeatherContext)
  // // const [length, setLength] = useState(0)
  // const [data, setData] = useState(beerData.cold.sunny)
  
  // -----------temporary-----------
  const [temp, setTemp] = useState(6)
  const [tempType, setTempType] = useState('warm')
  const [weather, setWeather] = useState('Clear')
  // const [length, setLength] = useState(0)
  const [data, setData] = useState(beerData.cold.sunny)
  // -----------temporary-----------

  const getBeerData = () => {
    console.log("----getBeerData  CALLED----")
    console.log("temp tempType weather: ", temp, tempType, weather)

    if(weather === 'Clear') {
      setWeather('sunny')
    } else if (weather === 'Thunderstorm' || weather === 'Drizzle' || weather === 'Rain' || weather === 'Snow' ) {
      setWeather('rainy')
    } else if (weather === 'Clouds') {
      setWeather('cloudy')
    }

    if (temp < 15) {
      setTempType('cold')
    } else if (temp >= 15 && temp <= 25) {
      setTempType('moderate')
    }
  }

  
  const random =  Math.floor(Math.random() * 4)
  // const random =  Math.floor(Math.random() * data.weather.tempType.length)
  
  console.log("----TEST RENDERED----")
  console.log("temp tempType weather: ", temp, tempType, weather)

  // console.log("beer data: ", beerData)
  // console.log("weather: ", weather) // --> called twice
  
  useEffect(() => {
    console.log("----useEffect EVOKED----")
    console.log("temp tempType weather: ", temp, tempType, weather)

    getBeerData()

  }, [data]);

  useEffect(() => {
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
  }, [tempType])

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
