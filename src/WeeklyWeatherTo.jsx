import React from 'react';
import DayCard from './DayCard';
import Inae from './Inae'

class WeeklyWeatherTo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullData: [],
      dailyData: []
    }

  }





  componentDidMount = () => {
    const weatherURL =
    // `https://api.openweathermap.org/data/2.5/forecast?q=vancouver&appid=${process.env.REACT_APP_WEATHER_API}`
    `https://api.openweathermap.org/data/2.5/forecast?q=${this.props.text}&appid=${process.env.REACT_APP_WEATHER_API}`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      console.log(weatherURL);
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