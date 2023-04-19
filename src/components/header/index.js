export function Header(weatherData) {
  return (
    <>
      <h1>
        {weatherData.temperature} degrees Celcius
        {weatherData.condition}
      </h1>
    </>
  );
}
