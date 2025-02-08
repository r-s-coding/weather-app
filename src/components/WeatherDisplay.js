import React from "react";

function WeatherDisplay( {data} ) {
    console.log(process.env.REACT_APP_API_KEY)
    console.log(data)
    return (
        <div className="WeatherDisplay">
            <h1>{data.main.temp} &#176;C</h1>
            <h2>Location: {data.name}</h2>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind Speed: {data.wind.speed} m/s</p>
            <p>Weather: {data.weather[0].description}</p>
        </div>
    );
}

export default WeatherDisplay;