import React, { useEffect, useState } from 'react'

const Test2 = (props) => {
    const [temp, setTemp] = useState(30)
    console.log("Data: ", props.weatherData)
    console.log("temp: ", temp)
    
    
    useEffect(() => {
        console.log("Data: ", props.weatherData)
        console.log("WITH DEP: ", temp)
        setTemp(props.weatherData.main.temp)
    }, [props.weatherData])
    
    useEffect(() => {
        console.log("Data: ", props.weatherData)
        console.log("WITHOUT DEP: ", temp)
        props.fetchWeatherData()

    }, [])

    return (
        <div>
            <h2>{props.weatherData.main.temp}</h2>
            <h2>{props.weatherData.weather[0].main}</h2>
            
        </div>
    )
}

export default Test2