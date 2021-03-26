import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// import { TempContext, WeatherContext , textContext} from "./Inae";



const CurrentWeather = ({ fetchWetherData, weatherData }) => {

    // const [temp, setTemp] = useState("");
    const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`

    


    useEffect(() => {
        // console.log(weatherData)
        fetchWetherData()
    }, [])

    return (
        <>
            <div className="temp-main">
                <h2 className="temp-main-cityname">{weatherData.name}</h2>
                <div className="temp-main-large">
                    <img src={iconUrl} alt="icon" className="temp-icon-large" />
                    <h1 className="temp-large">{Math.floor(weatherData.main.temp) || 0}</h1>
                    <h2 className="temp-c-small">℃</h2>
                </div>
                <div className="temp-high-low">
                    <h3><b>H:</b> {Math.floor(weatherData.main.temp_max)}°</h3>
                    <h3><b>L:</b> {Math.floor(weatherData.main.temp_min)}°</h3>
                </div>
            </div>
        </>
    )



}

export default CurrentWeather