export function Header(weatherEmoji, weather) {
  let headlineText = "headline";
  weatherEmoji.weather === true
    ? (headlineText = "The weather is awesome! Go outside and...")
    : (headlineText = "Bad weather outside! Here's what you can do now:");

  console.log(weatherEmoji);

  return (
    <>
      <h1>
        {weatherEmoji.weatherEmoji.temperature} degrees Celcius
        {weatherEmoji.weatherEmoji.condition}
      </h1>
      <h2>{headlineText}</h2>
    </>
  );
}
