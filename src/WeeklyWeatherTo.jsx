import React from 'react';
import DayCard from './DayCard';

class WeeklyWeatherTo extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }


  componentDidMount = () => {
    const weatherURL =
    `https://api.openweathermap.org/data/2.5/forecast?q=vancouver&appid=${process.env.REACT_APP_WEATHER_API}`

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

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  render() {
    return (
      <div>
        {this.formatDayCards()}
      </div>
    )
  }
}

export default WeeklyWeatherTo;