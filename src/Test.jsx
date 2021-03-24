import React, { useEffect, useState } from "react";
import axios from "axios";
import beerData from './beerData'
import Beer from './sass/img/coronas.png';
import './sass/main.scss'

const Test = () => {
  const [data, setData] = useState(beerData.cold.sunny)
  const temp = 27
  const weather = 'sunny'
  const random =  Math.floor(Math.random() * 3)

  console.log("beer data: ", beerData)

  useEffect(() => {

    if (temp < 15) {
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
    } else if (temp >= 15 && temp <= 25) {
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
    } else if (temp > 25) {
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


    // こんなやつ --> beerData.cold.sunny[0]のなかに[name, style, alc, IBU, description]
    // if (temp)


    // const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
    // const beerUrl = `https://sandbox-api.brewerydb.com/v2/styles/?key=${process.env.REACT_APP_BEER_API}`;
    // console.log(beerUrl)
    // axios.get(beerUrl).then((response) => {
    //   console.log(response);
    // });

    // fetch(beerUrl, {mode: 'cors'})
    // .then((response) => {
    //   response.json()
    // })
    // .then((data) => {
    //   console.log(data)
    // })
  }, []);

  // switch()
  // console.log(data)
  // console.log(random)
  // console.log(data[random])
  // console.log(data[random][0])
  // console.log(typeof(data[random]))
  // console.log(...data[random])
  // console.log(data[random][0])

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


    // <div>
    //   <p>name: {data[random][0]}</p>
    //   <p>Style: {data[random][1]}</p>
    //   <p>Alc: {data[random][2]}</p>
    //   <p>IBU: {data[random][3]}</p>
    //   <p>Description: {data[random][4]}</p>
    // </div>
  );
};

export default Test;
