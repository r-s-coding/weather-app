import React, { useState } from "react";
import Locations from "./Locations";
import { fetchGeoLocations, fetchWeatherData } from "../utilities";

function NavBar( {weather, err}) {
    const [city, setCity] = useState("");
    const [locations, setLocations] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    // Function to handle searching for a city
    const handleSearch = async (e) => {
        e.preventDefault();
        if (city.trim()) {
            const geoData = await fetchGeoLocations(city);
            if (geoData.message) {
                err(geoData.message);
                return;
            }
            if (geoData.length === 0) {
                err('Location not found');
                return;
            }
            err(null);
            setLocations(geoData);
            setShowDropdown(true);            
        }
    };

    // Function to handle the weather data based on the location selected
    const handleLocationSelection = async (location) => {
        const weatherData = await fetchWeatherData(location.lat, location.lon);
        if (weatherData.message) {
            err(weatherData.message);
            return;
        }
        if (weatherData.length === 0) {
            err('Weather data not found');
            return;
        }
        err(null);
        weather(weatherData);
        setShowDropdown(false);
        setCity("");
    }

    return (
        <div className="NavBar">
            <p>Weather App</p>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {showDropdown && <Locations locations={locations} handleLocationSelection={handleLocationSelection} />}
        </div>
    );
}

export default NavBar;