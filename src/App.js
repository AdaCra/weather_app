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

  useEffect(() => {
    const interval = setInterval(() => {
      FetchWeather(weather, setWeather, weatherEmoji, setWeatherEmoji);
    }, 36000);
    return () => clearInterval(interval);
  });

  const [activities, setActivities] = useLocalStorage("activity-list", {
    defaultValue: [
      { name: "Go Read A Book", id: 0, isForGoodWeather: true },
      { name: "Go Read A Book", id: 1, isForGoodWeather: false },
    ],
  });

  const handleAddActivity = (newActivity) => {
    if (activities[0].id === 0) {
      setActivities([newActivity]);
    } else {
      setActivities([...activities, newActivity]);
    }
  };

  let goodWeather = [];
  if (weather === true) {
    goodWeather = activities.filter(
      (activity) => activity.isForGoodWeather === true
    );
  } else {
    goodWeather = activities.filter((activity) => !activity.isForGoodWeather);
  }
  console.log(weatherEmoji);

  const handleDeleteActivity = (deletedActivityID) => {
    console.log(deletedActivityID);
    setActivities(
      activities.filter((activity) => activity.id !== deletedActivityID)
    );
  };

  return (
    <main>
      <Header weatherEmoji={weatherEmoji} weather={weather} />
      {console.log(activities)}
      <Form onAddActivity={handleAddActivity} />

      {
        <List
          activities={goodWeather}
          onDeleteActivity={handleDeleteActivity}
        />
      }
    </main>
  );
}

export default App;
