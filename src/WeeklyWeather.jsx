import React, {useState, useEffect} from 'react';
// import text from './Inae'
import axios from 'axios';



const WeeklyWeather = (text)=>{
    const [ state, setState ] = useState({
        fullData: [],
        dailyData: []
      })

    useEffect(()=>{
        // getWeeklyWeather(text)
        getWeather(text)
    },[text])

    async function getWeather(){
        const result = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${text.text}&appid=${process.env.REACT_APP_WEATHER_API}`
            ).then(resposeData => {
            console.log(resposeData.data);
            const dailyData = resposeData.data.list.filter(list => list.dt_txt.includes("18:00:00"))
            // setState(dailyData)
            setState({
                fullData: resposeData.data.list,
                dailyData: dailyData
              })
              console.log(state)
            }).catch(error => console.log(error))
            // })
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
        <div>
          <h1>Hello World!</h1>
        </div>
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