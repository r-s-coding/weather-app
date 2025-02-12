import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import WeatherDisplay from './components/WeatherDisplay';
import Footer from './components/Footer';
import Error from './components/Error';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);  

  return (
    <div className="App">
      <NavBar weather={setWeatherData} err={setError} />
      {error && <Error error={error} />}
      {weatherData && <WeatherDisplay data={weatherData} />}
      <Footer />
    </div>
  );
}

export default App;
