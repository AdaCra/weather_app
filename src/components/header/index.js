export function Header(weatherData) {
  return (

    <header>
      <h1>{weatherData.temperature}°C</h1>
      <h1>{weatherData.condition}</h1>
      
    </header>

  );
}
