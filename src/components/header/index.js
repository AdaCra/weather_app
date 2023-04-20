export function Header(weatherData) {
  return (
    <header id="currentWeather__container">
      <h2 className="currentWeather__Emoji">{weatherData.weather.condition}</h2>
      <h2 className="currentWeather__Emoji">{weatherData.weather.temperature}°C</h2>
    </header>
  );
}
