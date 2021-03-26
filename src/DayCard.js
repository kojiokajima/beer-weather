
import React from 'react';

// var moment = require('moment');

const DayCard = ({ reading }) => {
  // let newDate = new Date();
  // const weekday = reading.dt * 1000
  // newDate.setTime(weekday)

  // const tempMaxF = Math.round(reading.main.temp_max)
  // const tempMax = Math.round((tempMaxF - 32) * 9/5)
  // const tempMinF = Math.round(reading.main.temp_min)
  // const tempMin = Math.round((tempMinF - 32) * 9/5)

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

  return (
    <>
         <div className="weather-week">
            <div className="week-content">
                <h3 className="time-text">
                    {reading.dt_txt.toString().substring(0,10)}
                </h3>
                <img src="/icon/09d.png" className="weather-content-icon" />
                <div className="beer-reco">
                    <img src="/beer_t.gif" className="beer-content-icon" />
                    <h3 className="beer-content-text">Drink Outside</h3>
                </div>
                <div className="temp-low-high">
                    <h3 className="temp-text high">{reading.main.temp_max}°</h3>
                    <h3 className="temp-text low">{reading.main.temp_min}°</h3>
                </div>
            </div>
           
        </div>
        </>
    // <div className="col-sm-2">
    //   <div className="card">
    //     <h3 className="card-title">{reading.dt_txt}</h3>
    //     <i className={imgURL}></i>
    //     <h2>{celsius}°</h2>
    //     <div className="card-body">
    //       <p className="card-text">{reading.weather[0].description}</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default DayCard;