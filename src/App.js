import { Form } from "./components/form";
import { useState, useEffect } from "react";
import { List } from "./components/list";
import { Header } from "./components/header";
import useLocalStorage from "use-local-storage-state";
import badWeatherImage from "./img/badWeather.png";
import goodWeatherImage from "./img/goodWeather.png";
// this is the APP.JS
//needs: STATE for activities
//function handleAddActivity which accepts a new activity object as parameter and adds this object to the activities state
//passes handleAddActivity to the form component

function App() {
  // setting up weather Data, to then pass as component to everything
  const [weatherData, setweatherData] = useState({});

  async function fetchWeather(weatherData) {
    const URL = "https://example-apis.vercel.app/api/weather/rainforest";
    const response = await fetch(URL);
    weatherData = await response.json();
    setweatherData(weatherData);
  }

  //fetching the data here, once every 36000ms
  useEffect(() => {
    fetchWeather(weatherData);
    const interval = setInterval(() => {
      fetchWeather(weatherData);
    }, 36000);
    return () => clearInterval(interval);
  }, []);

  //console logging to check the accuracy

  //handle activity - function then passed to Form, will render activities

  const handleAddActivity = (newActivity) => {
    if (activities[0].id === 0) {
      setActivities([newActivity]);
    } else {
      setActivities([...activities, newActivity]);
    }
  };

  //referenced in List, will delete activities
  const handleDeleteActivity = (deletedActivityID) => {
    console.log(deletedActivityID);
    setActivities(
      activities.filter((activity) => activity.id !== deletedActivityID)
    );
  };

  //setting default values of activities AND activities state
  const [activities, setActivities] = useLocalStorage("activity-list", {
    defaultValue: [
      { name: "Go Read A Book", id: 0, isForGoodWeather: true },
      { name: "Go Read A Book", id: 1, isForGoodWeather: false },
    ],
  });

  //honestly making an array cause it seems easier than putting a tenary in list.
  let filteredActivities = [];
  if (weatherData.isGoodWeather === true) {
    filteredActivities = activities.filter(
      (activity) => activity.isForGoodWeather === true
    );
  } else {
    filteredActivities = activities.filter(
      (activity) => !activity.isForGoodWeather
    );
  }
  let backgroundImage = weatherData.isGoodWeather
    ? goodWeatherImage
    : badWeatherImage;

  return (
    <main>
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1>Weather Activity App</h1>
        <Header weather={weatherData} />
        <Form onAddActivity={handleAddActivity} />
      </section>
      <List
        activities={filteredActivities}
        weather={weatherData.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
    </main>
  );
}

export default App;
