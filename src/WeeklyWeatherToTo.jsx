import React, { useEffect } from 'react';
import DayCard from './DayCard';

const WeeklyWeatherToTo = (props) => {
  const state = {
    fullData: [],
    dailyData: []
  }

  useEffect(()=>{
      console.log(props.text);
      getWeather()
      formatDayCards()
  }, [props.text])
  

  const getWeather = () => {
    const weatherURL =
    `https://api.openweathermap.org/data/2.5/forecast?q=${props.text}&appid=${process.env.REACT_APP_WEATHER_API}`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }

  const formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

    return (
      <div>
        {this.formatDayCards()}
      </div>
    )
}

export default WeeklyWeatherToTo;