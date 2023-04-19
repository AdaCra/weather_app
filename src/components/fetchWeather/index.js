// export const Header = () => {

//     return (<h2></h2>)
// }

export const Header = (weather) => {
  console.log(weather);
  return (
    <>
      <h2> {weather.temperature}</h2>
      <h2>{weather.condition}</h2>{" "}
    </>
  );
};

export async function FetchWeather(
  weather,
  { setWeather },
  weatherEmoji,
  { setWeatherEmoji }
) {
  const URL = "https://example-apis.vercel.app/api/weather/";
  const response = await fetch(URL);
  const weatherData = await response.json();
  let dataEmoji = {
    temperature: weatherData.temperature,
    condition: weatherData.condition,
  };
  setWeatherEmoji(dataEmoji);
  setWeather(weatherData.isGoodWeather);

  console.log(weatherData);
}
