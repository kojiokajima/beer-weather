import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
    const [data, setData] = useState()

  useEffect(() => {
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
    const beerUrl = `https://sandbox-api.brewerydb.com/v2/styles/?key=${process.env.REACT_APP_BEER_API}`;
    console.log(beerUrl)
    axios.get(beerUrl).then((response) => {
      console.log(response);
    });
  }, []);
  return <div>Yoo</div>;
};

export default Test;
