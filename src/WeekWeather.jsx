import axios from 'axios'
import React, { useEffect } from 'react'
import BeerIcon from './sass/img/beer_w.png'
import icon from './sass/img/icon.png';
// import {} from './Inae'

const WeekWeather = ({ fetchWeeklyWetherData } ) => {


    useEffect(() => {
        fetchWeeklyWetherData()
    }, [])


    return (

        <>
         <div className="weather-week">
            <div className="week-content">
                <h3 className="time-text">
                    {fetchWeeklyWetherData.data + "°"}
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



export default WeekWeather

