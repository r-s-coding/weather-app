import './App.css';
import NavBar from './components/NavBar';
import WeatherDisplay from './components/WeatherDisplay';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WeatherDisplay />
      <Footer />
    </div>
  );
}

export default App;
