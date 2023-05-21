import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox() {
    const [cityName, setCityName] = useState('');
    const [forecasts, setForecasts] = useState([]);

    handleKeyDown = async (event) => {
        if (event.key === 'Enter' && cityName.trim().length > 2) {

            const URL = "https://api.weatherapi.com/v1/forecast.json?key=90f1d3d5033e4617b0e01751232105&q=" + cityName + "&days=3&aqi=no&alerts=no";
            try {
                const respone = await fetch(URL, { method: 'GET', headers: { Accept: 'application/json' } })
                if (!respone.ok) {
                    throw new Error('erroe failed to send an HTTP GET Request:' + response.status)
                }
                const data = await respone.json();
                console.log(data.forecast.forecastday);
                setForecasts(data.forecast.forecastday);
            } catch (error) {
                console.error(error);
            }
            console.log('Did hit Enter key');
        }
    }

    function handleChange(event) {
        setCityName(event.target.value)
    }

    return (
        <div>
            <input type="text"
                className="searchBox"
                placeholder="Enter city name"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />  <h2>weather for: {cityName} </h2>
            <ul>
                {forecasts.map(function (forecast, i) {
                    return (
                        <li key={i}>
                            <span>
                                {forecast.date}
                                {forecast.day.maxtemp_c}
                            </span>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}