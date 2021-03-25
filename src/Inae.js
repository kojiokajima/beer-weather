import React, {createContext, useState} from 'react'
import axios from "axios"
import './sass/main.scss';
import Logo from './sass/img/fake_logo.png';
import icon from './sass/img/icon.png';
import Beer from './sass/img/coronas.png';
import BeerIcon from './sass/img/beer_w.png'
import Test from './Test';
import CurrentWeather from './CurrentWeather';
import Searth from "./Search";

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
        weather: [{icon: '01n', main: ''}]
    }
    const [weatherData, setWeatherData] = useState(defaultWeatherData)


    const onSubmitButton = (e) => {
      e.preventDefault();
      // console.log(e.target[0].value)
      setText(e.target[0].value)
      setText((value)=>{
        fetchWetherData(value)
        return value
      })
    }

    const fetchWetherData = async (city = 'vancouver') => {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
        const response = await axios.get(url)
        setWeatherData(response.data)
    }

    return (
    <TempContext.Provider value={[temp, setTemp], [weather, setWeather]} >
    <div className="App">
        <header className="App-header">
        <nav className="nav-bar">
          <img src={Logo} className="nav-logo" />
          <Searth  onSubmit={onSubmitButton}  />
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
        <Test text={text} fetchWeatherData={fetchWetherData} weatherData={weatherData} />
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

      <div className="weather-week">
        <div className="week-content">
          <h3 className="time-text">Tuesday</h3>
          <img src={icon} className="weather-content-icon" />
          <div className="beer-reco">
            <img src={BeerIcon} className="beer-content-icon" />
            <h3 className="beer-content-text">Drink Outside</h3>
          </div>
          <h3 className="temp-text">24°</h3>
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
          <h3 className="temp-text">24°</h3>
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
          <h3 className="temp-text">24°</h3>
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
          <h3 className="temp-text">24°</h3>
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
          <h3 className="temp-text">24°</h3>
          <div className="temp-low-high">
            <h3 className="temp-text high">24°</h3>
            <h3 className="temp-text low">14°</h3>
          </div>
        </div>
      </div>

      <div className="beer-wave-all">
        <div className="beer-waves"></div>
        <div className="beer-waves1"></div>
      </div>
    {/* </div> */}
    </TempContext.Provider>

  );
}

export default Inae;
