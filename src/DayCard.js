
import React, { useEffect, useState } from 'react';


const DayCard = ({ reading }) => {


  // const tempMaxF = Math.round(reading.main.temp_max)
  // const tempMax = Math.round((tempMaxF - 32) * 9/5)
  // const tempMinF = Math.round(reading.main.temp_min)
  // const tempMin = Math.round((tempMinF - 32) * 9/5)

  const icon = `/icon/${reading.weather[0].icon}.png`

  const [comment, setComment] = useState('Drink Outside')


//   const beerComment = () => {
      
//     switch (reading.weather[0].icon) {
//         case '04d':
//             setComment('Drink Inside')
//             break;
    
//         default:
//             break;
//     }
//   }


 
  

  return (
    <>
         <div className="weather-week">
            <div className="week-content">
                <h3 className="time-text">
                    {reading.dt_txt.toString().substring(5,10)}
                </h3>
                <div className="icon-set">
                    <img src={icon} className="weather-content-icon" />
                    <p>{reading.weather[0].description}</p>

                </div>

                <div className="beer-reco">
                    <img src="/beer_t.gif" className="beer-content-icon" />
                    <h3 className="beer-content-text">{comment}</h3>
                </div>
                <div className="temp-low-high">
                    <h3 className="temp-text high">{Math.floor(reading.main.temp_max) - 273}°</h3>
                    <h3 className="temp-text low">{Math.floor(reading.main.temp_min) - 273}°</h3>
                </div>
            </div>
           
        </div>
        </>
 
  )
}

export default DayCard;