// export const Header = () => {

//     return (<h2></h2>)
// }

export async function FetchWeather(
  weather,
  setWeather,
  weatherEmoji,
  setWeatherEmoji
) {
  const URL = "https://example-apis.vercel.app/api/weather/";
  const response = await fetch(URL);
  const weatherData = await response.json();
  weatherEmoji = {
    temperature: weatherData.temperature,
    condition: weatherData.condition,
  };
  setWeatherEmoji(weatherEmoji);
  setWeather(weatherData.isGoodWeather);

  console.log(weatherData);
}

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
