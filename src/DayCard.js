
import React from 'react';


const DayCard = ({ reading }) => {


  // const tempMaxF = Math.round(reading.main.temp_max)
  // const tempMax = Math.round((tempMaxF - 32) * 9/5)
  // const tempMinF = Math.round(reading.main.temp_min)
  // const tempMin = Math.round((tempMinF - 32) * 9/5)

  const icon = `/${reading.weather[0].icon}.png`

  return (
    <>
         <div className="weather-week">
            <div className="week-content">
                <h3 className="time-text">
                    {reading.dt_txt.toString().substring(0,10)}
                </h3>
                <img src={icon} className="weather-content-icon" />
                <div className="beer-reco">
                    <img src="/beer_t.gif" className="beer-content-icon" />
                    <h3 className="beer-content-text">Drink Outside</h3>
                </div>
                <div className="temp-low-high">
                    <h3 className="temp-text high">{reading.main.temp_max}°</h3>
                    <h3 className="temp-text low">{reading.main.temp_min}°</h3>
                    <p>{reading.weather[0].description}</p>
                </div>
            </div>
           
        </div>
        </>
 
  )
}

export default DayCard;