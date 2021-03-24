import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TempContext, WeatherContext } from "./Inae";



const CurrentWeather = () => {

    const [weather, setWeather] = useContext(WeatherContext)
    const [temp, setTemp] = useContext(TempContext);
    // const [temp, setTemp] = useState("");
    const [tempMax, setTempMax] = useState("");
    const [tempMin, setTempMin] = useState("");
    const [icon, setIcon] = useState("")
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`
    console.log("TEMP IS ", temp)
    console.log("WEATHER IS ", weather)



    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
        console.log(url);
        axios.get(url).then((response) => {
            setWeather(response.data.weather.main)
            setTemp(response.data.main.temp)
            setTempMax(response.data.main.temp_max)
            setTempMin(response.data.main.temp_min)
            setIcon(response.data.weather[0].icon)
        })
    }, [])


    return (
        <>
            <div className="temp-main">
                <h2 className="temp-main-cityname">Vancouver</h2>
                <div className="temp-main-large">
                    <img src={iconUrl} alt="icon" className="temp-icon-large" />
                    <h1 className="temp-large">{Math.floor(temp)}</h1>
                    <h2 className="temp-c-small">℃</h2>
                </div>
                <div className="temp-high-low">
                    <h3><b>H:</b> {Math.floor(tempMax)}°</h3>
                    <h3><b>L:</b> {Math.floor(tempMin)}°</h3>
                </div>
            </div>
        </>
    )



}

export default CurrentWeather