import React, { useState } from "react";
import { fetchGeoLocation, fetchWeatherData } from "../utilities";

function NavBar( {weather, err}) {
    const [city, setCity] = useState("");
    const fetchData = async () => {
        const locationData = await fetchGeoLocation(city);
        if (locationData === 'Location not found' || locationData === 'Something went wrong ... Please try again') {
            err(locationData);
            return;
        }
        const weatherData = await fetchWeatherData(locationData[0].lat, locationData[0].lon);
        if (weatherData === 'Weather data not found' || weatherData === 'Something went wrong ... Please try again') {
            err(weatherData);
            return;
        }
        weather(weatherData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }

    return (
        <div className="NavBar">
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default NavBar;