const apiKey = process.env.REACT_APP_API_KEY;
const apiLocationURL = `https://api.openweathermap.org/geo/1.0/direct?q=`;
const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?`;

// Fetch geo location data of provided city from the API 
const fetchGeoLocation = async (city) => {
  try {
    const response = await fetch(`${apiLocationURL}${city}&limit=1&appid=${apiKey}`);
    if (response.ok) {
      const data = await response.json();
      return data
    } else {
      return 'Location not found';
    }
  } catch (error) {
    return 'Something went wrong ... Please try again';
  }
};

// Fetch weather data for the provided geo location from the API
const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(`${apiWeatherURL}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    if (response.ok) {
      const data = await response.json();
      return data
    } else {
      return 'Weather data not found';
    }
  } catch (error) {
    return 'Something went wrong ... Please try again';
  }
}

export { fetchGeoLocation, fetchWeatherData };