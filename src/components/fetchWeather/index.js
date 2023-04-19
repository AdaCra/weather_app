import { useState } from "react";

export async function FetchWeather(weather) {
  const URL = "https://example-apis.vercel.app/api/weather/arctic";
  const response = await fetch(URL);
  const weatherData = await response.json();
  weather = weatherData.isGoodWeather;
  console.log(weather);
  return weather;
}
