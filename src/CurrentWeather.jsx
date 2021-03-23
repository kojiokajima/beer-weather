import React, { useState, useEffect } from "react";
import axios from "axios";
import Koji from "./Koji"


const CurrentWeather = () => {

    const [temp, setTemp] = useState("");

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
        axios.get(url).then((response) => {
            setTemp(response.data.main.temp)
        })
    }, [])


    return (
        <>
            <div>{temp}</div>
            <Koji age={30}/>
        </>
    )



}

export default CurrentWeather