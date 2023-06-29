import React, { useEffect, useState } from "react";
import axios from "axios";

let API_KEY = 'cbf6566e445cd4fdf49a39c8bbc0376c';
const Weather = () => {
    let [city, setCity] = useState('');
    let [weather, setWeather] = useState({});

    useEffect(() => {
        (async function () {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbf6566e445cd4fdf49a39c8bbc0376c`);
            console.log(response);
            setWeather(response.data)
        }())
    }, [city])

    return (
        <div>
            <input className="search" type="text" onChange={(e) => { setCity(e.target.value) }}></input>
            {
                weather.weather &&
                <div className="weather">
                    <h3>{weather.name}</h3>
                    <h2>{weather.main.temp}F</h2>
                    <p>{weather.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}></img>
                </div>

            }
        </div>
    )
}

export default Weather;