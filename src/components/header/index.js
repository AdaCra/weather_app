export function Header(weatherEmoji, weather) {
  console.log(weatherEmoji);

  return (
    <>
      <h1>
        {weatherEmoji.weatherEmoji.temperature} degrees Celcius
        {weatherEmoji.weatherEmoji.condition}
      </h1>
    </>
  );
}
