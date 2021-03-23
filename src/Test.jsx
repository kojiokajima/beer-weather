import React, { useEffect, useState } from "react";
import axios from "axios";
import BeerData from './beerData'

const Test = () => {
  const [beerData, setBeerData] = useState([])

  useEffect(() => {
    const temp = 27
    const weather = 'sunny'
    // こんなやつ --> beerData.cold.sunny[0]のなかに[name, style, alc, IBU, description]
    // if (temp )


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

  return <div>Yoo</div>;
};

export default Test;
