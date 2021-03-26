import axios from 'axios'
import React, { useEffect } from 'react'
import BeerIcon from './sass/img/beer_w.png'
import icon from './sass/img/icon.png';
// import {} from './Inae'

const WeekWeather = ({ fetchWeeklyWetherData, weeklyWeatherData } ) => {
    console.log("props: ", weeklyWeatherData)


    // -----useing open weather api----
    // const createNewArray= () => {
    //     weeklyWeatherData.map((value, index) => {
    //         if (index % 8 === 0) {
    //             newArr.push(value)
    //         }
    //     })
    // }
    // createNewArray()

    // -----useing world weather online----
    // -----useing world weather online----



    if (weeklyWeatherData.weather) {
        console.log("weeklyWeatherData: ", weeklyWeatherData);
        console.log("weeklyWeatherData.weather: ", weeklyWeatherData.weather);
        console.log("weeklyWeatherData.weather.slice: ", weeklyWeatherData.weather.slice(1));
    }
    useEffect(() => {
        fetchWeeklyWetherData()
    }, [])

    if(!weeklyWeatherData.weather) {
        return <></>
    } else {
        return (
            <>
                <div className="weather-week">
                    {
                        weeklyWeatherData.weather.slice(1).map((value, index) => {
                            return (
                                <div className="week-content" key={index}>
                                    <h3 className="time-text">
                                        {value.date.substring(5, 19)}
                                    </h3>
                                    <img src="/icon/09d.png" className="weather-content-icon" />
                                    <div className="beer-reco">
                                        <img src="/beer_t.gif" className="beer-content-icon" />
                                        <h3 className="beer-content-text">Drink Outside</h3>
                                    </div>
                                    <div className="temp-low-high">
                                        <h3 className="temp-text high">{value.maxtempC}°</h3>
                                        <h3 className="temp-text low">{value.mintempC}°</h3>
                                    </div>
                                </div>
                                )
                        })
                    }
                </div>
            </>
    
        )
    }




    // if (newArr.length === 0) {
    //    return <>hi</>
    // } else {
    //     return (
    //         <>
    //          <div className="weather-week">
    //             {
    //                 newArr.map((value, index) => {
    //                     return (
    //                     <div className="week-content" key={index}>
    //                         <h3 className="time-text">
    //                             {value.dt_txt.substring(5, 10)}
    //                             {/* yoyo */}
    //                             {/* {weeklyWeatherData[0].dt_txt} */}
    //                             {/* {weeklyWeatherData[0][0].dt_txt} */}
    //                         </h3>
    //                         <img src="/icon/09d.png" className="weather-content-icon" />
    //                         <div className="beer-reco">
    //                             <img src="/beer_t.gif" className="beer-content-icon" />
    //                             <h3 className="beer-content-text">Drink Outside</h3>
    //                         </div>
    //                         <div className="temp-low-high">
    //                             {/* <h3 className="temp-text high">24°</h3> */}
    //                             <h3 className="temp-text high">{Math.floor(value.main.temp_max)}°</h3>
    //                             {/* <h3 className="temp-text low">14°</h3> */}
    //                             <h3 className="temp-text low">{Math.floor(value.main.temp_min)}°</h3>
    //                         </div>
    //                     </div>
    //                     )
    //                 })
    //             }



    //             {/* <div className="week-content"> */}
    //                 {/* <h3 className="time-text"> */}
    //                     {/* {newArr[0].dt_txt.substring(5, 10)} */}
    //                     {/* yoyo */}
    //                     {/* {weeklyWeatherData[0].dt_txt} */}
    //                     {/* {weeklyWeatherData[0][0].dt_txt} */}
    //                 {/* </h3> */}
    //                 {/* <img src="/icon/09d.png" className="weather-content-icon" /> */}
    //                 {/* <div className="beer-reco"> */}
    //                     {/* <img src="/beer_t.gif" className="beer-content-icon" /> */}
    //                     {/* <h3 className="beer-content-text">Drink Outside</h3> */}
    //                 {/* </div> */}
    //                 {/* <div className="temp-low-high"> */}
    //                     {/* <h3 className="temp-text high">24°</h3> */}
    //                     {/* <h3 className="temp-text high">{Math.floor(newArr[0].main.temp_max - 273)}°</h3> */}
    //                     {/* <h3 className="temp-text low">14°</h3> */}
    //                     {/* <h3 className="temp-text low">{Math.floor(newArr[0].main.temp_min - 273)}°</h3> */}
    //                 {/* </div> */}
    //             {/* </div> */}
    //         </div>
    //         </>
    //     )
    // }


}



export default WeekWeather