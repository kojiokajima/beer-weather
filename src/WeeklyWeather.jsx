import React from 'react';
// import text from './Inae'

class WeeklyWeather extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${process.env.REACT_APP_WEATHER_API}`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
    //   const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      const dailyData = data.list.filter(list => list.dt_txt.includes("18:00:00")) 
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default WeeklyWeather;