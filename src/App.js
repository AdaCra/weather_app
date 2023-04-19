import { Form } from "./components/form";
import { useState, useEffect } from "react";
import { List } from "./components/list";
import { FetchWeather, Header } from "./components/fetchWeather";
import useLocalStorage from "use-local-storage-state";

// this is the APP.JS
//needs: STATE for activities
//function handleAddActivity which accepts a new activity object as parameter and adds this object to the activities state
//passes handleAddActivity to the form component

function App() {
  const [weatherEmoji, setWeatherEmoji] = useState({});
  const [weather, setWeather] = useState(true);
  const [weatherData, setweatherData] = useState({});

  async function FetchWeather(weatherData) {
    const URL = "https://example-apis.vercel.app/api/weather/";
    const response = await fetch(URL);
    weatherData = await response.json();
    setweatherData(weatherData);
  }

  useEffect(() => {
    FetchWeather(weatherData);
    const interval = setInterval(() => {
      FetchWeather(weatherData);
    }, 36000);
    return () => clearInterval(interval);
  }, []);

  console.log(weatherData.isGoodWeather);

  const [activities, setActivities] = useLocalStorage("activity-list", {
    defaultValue: [{ name: "go read a book" }],
  });
  const handleAddActivity = (newActivity) => {
    if (activities[0].name === undefined) {
      setActivities([newActivity]);
    } else {
      setActivities([...activities, newActivity]);
    }
  };

  let goodWeather = [];
  if (weatherData.isGoodWeather === true) {
    goodWeather = activities.filter(
      (activity) => activity.isForGoodWeather === true
    );
  } else {
    goodWeather = activities.filter((activity) => !activity.isForGoodWeather);
  }

  return (
    <>
      <Header weatherEmoji={weatherEmoji} weather={weatherData.isGoodWeather} />
      {console.log(activities)}
      <Form onAddActivity={handleAddActivity} />
      {<List activities={goodWeather} />}
    </>
  );
}

export default App;
