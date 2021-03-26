import React, {createContext, useState} from 'react'
import axios from "axios"
import './sass/main.scss';
import Logo from './sass/img/fake_logo.png';
import icon from './sass/img/icon.png';
import Beer from './sass/img/coronas.png';
// import BeerIcon from './sass/img/beer_w.png'
import Test from './Test';
import CurrentWeather from './CurrentWeather';
import Searth from "./Search";
import WeekWeather from './WeekWeather';
import WeeklyWeather from './WeeklyWeather';
import WeeklyWeatherTo from './WeeklyWeatherTo';
// import WeeklyWeatherToTo from './WeeklyWeatherToTo';





export const TempContext = createContext([0, ()=>{}])
export const WeatherContext = createContext(['Clouds', ()=>{}])
export const textContext = createContext(["vancouver",()=>{}])

function Inae() {
    const [temp, setTemp] = useState(0)
    const [weather, setWeather] = useState('Clouds')
    const [text, setText] = useState("vancouver");
    const defaultWeatherData = {
        name: '',
        main: {
            temp: '',
            temp_max: '',
            temp_min: '',
        },
        weather: [{icon: ''}]
    }
    
    //weekly part 
    // const defaultWeeklyWeatherData = {
    //     dt_txt: '',
    //     main: {
    //         temp_max: '',
    //         temp_min: ''
    //     }

    // }

    // const defaultWeeklyWeatherData = []


    const [weatherData, setWeatherData] = useState(defaultWeatherData)

    //weekly part
    // const [weeklyWeatherData, setWeeklyWeahterData] = useState(defaultWeeklyWeatherData)
    // const [weeklyWeatherData, setWeeklyWeahterData] = useState([])




    const handleChange = (e) => {
        setText(e.target.value)
    }

    const onClickButton = (e) => {
        console.log(text)
        fetchWetherData()
    }

    const fetchWetherData = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
        const response = await axios.get(url)
        setWeatherData(response.data)
    }

    //weekly api
    // const fetchWeeklyWetherData = async () => {
    //     // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${text}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
    //     // const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${text}&cnt=6&appid=${process.env.REACT_APP_WEATHER_API}`
    //     const url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${process.env.REACT_APP_WEATHER_WEEK_API}&q=${text}&showlocaltime=yes&num_of_days=8&tp=24&format=json`

    //     const response = await axios.get(url)
    //     // defaultWeeklyWeatherData.push(response.data.list)
    //     setWeeklyWeahterData(response.data.data)
    //     // setWeeklyWeahterData(defaultWeatherData)
    //     // console.log(weeklyWeatherData);
    //     console.log("response.data: ", response.data);
    // }





 

    return (
    <TempContext.Provider value={[temp, setTemp], [weather, setWeather]} >
    <div className="App">
        <header className="App-header">
        <nav className="nav-bar">
          <img src={Logo} className="nav-logo" />
          <Searth onChange={handleChange} onClick={onClickButton} value={text} />
          {/* <div className="search">
            <input
              type="search"
              placeholder="Search your city, Find your beer!!"
              className="search-input"
            ></input>
            <button>SEARCH</button>
          </div> */}
          <div className="burger-menu">
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </nav>
      </header>
      {/* <div className="temp-main">
            <h2 className="temp-main-cityname">Vancouver</h2>
            <div className="temp-main-large">
                <img src={icon} className="temp-icon-large" />
                <h1 className="temp-large">24</h1>
                <h2 className="temp-c-small">℃</h2>
            </div>
            <div className="temp-high-low">
                <h3><b>H:</b> 24°</h3>
                <h3><b>L:</b> 11°</h3>
            </div>
        </div> */}
        <CurrentWeather fetchWetherData={fetchWetherData} weatherData={weatherData} />
        {/* <div className="beer-info">
            <img src={Beer} className="beer-img" />
            <div className="beer-text">
                <div className="beer-title">
                    <h2 className="beer-name">Corona</h2>
                    <h3 className="beer-name2"> is perfect to this weather!</h3>
                </div>
                <div className="beer-contents">
                    <div className="beer-describe">
                        <h3 className="question">Type: </h3>
                        <h3 className="answer">Pale</h3>
                    </div>
                    <div className="beer-describe">
                        <h3 className="question">IBU: </h3>
                        <h3 className="answer star">★ ★ ★ ★ </h3>
                    </div>
                    <div className="beer-describe">
                        <h3 className="question">Description: </h3>
                        <h3 className="answer">Why we choose...</h3>
                    </div>
                
                <button className="btn-link">Go to Homepage</button>
                </div>
            </div>
        </div> */}
        <Test />
        <hr></hr>
        <div className="weather-time">
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
            <div className="weather-content">
                <h3 className="time-text">Now</h3>
                <img src={icon} className="weather-content-icon" />
                <h3 className="temp-text">24°</h3>
            </div>
        </div>
      </div>
      <hr></hr>
      {/* <WeekWeather fetchWeeklyWetherData={fetchWeeklyWetherData} weeklyWeatherData={weeklyWeatherData} /> */}
      {/* <WeeklyWeather text={text} /> */}
      <WeeklyWeatherTo onChange={handleChange} onClick={onClickButton} text={text}/>
      {/* <WeeklyWeatherToTo onChange={handleChange} onClick={onClickButton} value={text}/> */}




        {/* <div className="weather-week">
            <div className="week-content">
                <h3 className="time-text">Tuesday</h3>
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
            <div className="week-content">
                <h3 className="time-text">Tuesday</h3>
                <img src={icon} className="weather-content-icon" />
                <div className="beer-reco">
                    <img src={BeerIcon} className="beer-content-icon" />
                    <h3 className="beer-content-text">Drink Outside</h3>
                </div>
                <div className="temp-low-high">
                    <h3 className="temp-text high">24°</h3>
                    <h3 className="temp-text low">14°</h3>
                </div>
            </div>
            <div className="week-content">
                <h3 className="time-text">Tuesday</h3>
                <img src={icon} className="weather-content-icon" />
                <div className="beer-reco">
                    <img src={BeerIcon} className="beer-content-icon" />
                    <h3 className="beer-content-text">Drink Outside</h3>
                </div>
                <div className="temp-low-high">
                    <h3 className="temp-text high">24°</h3>
                    <h3 className="temp-text low">14°</h3>
                </div>
            </div>
            <div className="week-content">
                <h3 className="time-text">Tuesday</h3>
                <img src={icon} className="weather-content-icon" />
                <div className="beer-reco">
                    <img src={BeerIcon} className="beer-content-icon" />
                    <h3 className="beer-content-text">Drink Outside</h3>
                </div>
                <div className="temp-low-high">
                    <h3 className="temp-text high">24°</h3>
                    <h3 className="temp-text low">14°</h3>
                </div>
            </div>
            <div className="week-content">
                <h3 className="time-text">Tuesday</h3>
                <img src={icon} className="weather-content-icon" />
                <div className="beer-reco">
                    <img src={BeerIcon} className="beer-content-icon" />
                    <h3 className="beer-content-text">Drink Outside</h3>
                </div>
                <div className="temp-low-high">
                    <h3 className="temp-text high">24°</h3>
                    <h3 className="temp-text low">14°</h3>
                </div>
            </div>
        </div> */}

      <div className="beer-wave-all">
        <div className="beer-waves"></div>
        <div className="beer-waves1"></div>
      </div>
    {/* </div> */}
    </TempContext.Provider>

  );
}

export default Inae;