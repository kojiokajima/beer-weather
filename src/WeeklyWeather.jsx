import React, { useState, useEffect } from 'react';
// import text from './Inae'
import axios from 'axios';



const WeeklyWeather = (text)=>{
    // const [ state, setState ] = useState({
    //     fullData: [],
    //     dailyData: []
    // })

    const [ week, setWeek ] = useState({
        city: ''

    })

    // const [ week, setWeek ] = useState({
    //     dailyData: []

    // })

    useEffect(()=>{
        getWeather()
    },[text])

    async function getWeather(){
        const result = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${text.text}&appid=${process.env.REACT_APP_WEATHER_API}`
            ).then(resposeData => {
                console.log(resposeData.data);
                // const dailyData = getFiveDayData(resposeData.data)
                // const dailyData = resposeData.data.list.filter(list => list.dt_txt.includes("18:00:00"))
                // setState({
                //     fullData: resposeData.data.list,
                //     dailyData: dailyData
                // })
                // setState(resposeData.data.list)
                // console.log(dailyData);
                setWeek(resposeData.data.city)
                // setWeek(dailyData);
                console.log(week);
            }).catch(error => console.log(error))
    } 

    const getFiveDayData = (data) => {
        const dailyData = data.list.filter(list => list.dt_txt.includes("18:00:00"))

        return dailyData
    }

  
    // const getWeeklyWeather = () => {
    //   const weatherURL =
    //   // `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${process.env.REACT_APP_WEATHER_API}`
    //   `https://api.openweathermap.org/data/2.5/forecast?q=${text.text}&appid=${process.env.REACT_APP_WEATHER_API}`
  
    //   fetch(weatherURL)
    //   .then(res => res.json())
    //   .then(data => {
    //     const dailyData = data.list.filter(list => list.dt_txt.includes("18:00:00"))

    //     setState({
    //       fullData: data.list,
    //       dailyData: dailyData
    //     })
    //     console.log(state)
    //   })
    // }

    if(!text.text){
        return(
            <h1>Loading</h1>
        )
    }
  
  
      return (
        <>
         <div className="weather-week">
            <div className="week-content">
                <h3 className="time-text">
                    {week.name}
                </h3>
                <img src="/icon/09d.png" className="weather-content-icon" />
                <div className="beer-reco">
                    <img src="/beer_t.gif" className="beer-content-icon" />
                    <h3 className="beer-content-text">Drink Outside</h3>
                </div>
                <div className="temp-low-high">
                    <h3 className="temp-text high">24°</h3>
                    <h3 className="temp-text low">14°</h3>
                </div>
            </div>
           
        </div>
        </>
      )

  }

// class WeeklyWeather extends React.Component {
//   state = {
//     fullData: [],
//     dailyData: []
//   }

//   componentDidMount = () => {
//     const weatherURL =
//     // `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${process.env.REACT_APP_WEATHER_API}`
//     `https://api.openweathermap.org/data/2.5/forecast?q=vancouver&appid=${process.env.REACT_APP_WEATHER_API}`

//     fetch(weatherURL)
//     .then(res => res.json())
//     .then(data => {
//     //   const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
//       const dailyData = data.list.filter(list => list.dt_txt.includes("18:00:00")) 
//       this.setState({
//         fullData: data.list,
//         dailyData: dailyData
//       }, () => console.log(this.state))
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World!</h1>
//       </div>
//     )
//   }
// }

export default WeeklyWeather;