export function Header(weatherEmoji, weather) {
  return (
    <>
      <h1>
        {weatherEmoji.weatherEmoji.temperature} degrees Celcius
        {weatherEmoji.weatherEmoji.condition}
      </h1>
    </>
  );
}
