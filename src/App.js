import { Form } from "./components/form";
import { useState, useEffect } from "react";
import { List } from "./components/list";
import { FetchWeather } from "./components/fetchWeather";
import useLocalStorage from "use-local-storage-state";

// this is the APP.JS
//needs: STATE for activities
//function handleAddActivity which accepts a new activity object as parameter and adds this object to the activities state
//passes handleAddActivity to the form component

function App() {
  const [weather, setWeather] = useState(true);

  // FETCH WEATHER
  async function FetchWeather() {
    const URL = "https://example-apis.vercel.app/api/weather/";
    const response = await fetch(URL);
    const weatherData = await response.json();
    setWeather(weatherData.isGoodWeather);
    console.log(weather);
  }

  useEffect(() => {
    FetchWeather();
  });

  const [activities, setActivities] = useLocalStorage("activity-list", {
    defaultValue: [{ name: "Go Read A Book", id: 0, isForGoodWeather: true }],
  });

  // CREATE ACTIVITY
  const handleAddActivity = (newActivity) => {
    if (activities[0].id === 0) {
      setActivities([newActivity]);
    } else {
      setActivities([...activities, newActivity]);
    }
  };

  // FILTER BY WEATHER
  let goodWeather = [];
  if (weather === true) {
    goodWeather = activities.filter(
      (activity) => activity.isForGoodWeather === true
    );
  } else {
    goodWeather = activities.filter((activity) => !activity.isForGoodWeather);
  }

  // DELETE ACTIVITY
  const handleDeleteActivity = (deletedActivityID) => {
    console.log(deletedActivityID);
    setActivities(activities.filter((activity)=> activity.id !== deletedActivityID))
  };

  return (
    <>
      {console.log(activities)}
      <Form onAddActivity={handleAddActivity} />
      {
        <List
          activities={goodWeather}
          weather={weather}
          onDeleteActivity={handleDeleteActivity}
        />
      }
    </>
  );
}

export default App;
