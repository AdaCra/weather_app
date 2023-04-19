import { Form } from "./components/form";
import { useState } from "react";
import { List } from "./components/list";

import useLocalStorage from "use-local-storage-state";

// this is the APP.JS
//needs: STATE for activities
//function handleAddActivity which accepts a new activity object as parameter and adds this object to the activities state
//passes handleAddActivity to the form component

function App() {
  const isForGoodWeather = false;

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

  if (isForGoodWeather === true) {
    goodWeather = activities.filter(
      (activity) => activity.isForGoodWeather === true
    );
  } else {
    goodWeather = activities.filter((activity) => !activity.isForGoodWeather);
  }

  return (
    <>
      {console.log(activities)}
      <Form onAddActivity={handleAddActivity} />
      {<List activities={goodWeather} weather={isForGoodWeather} />}
    </>
  );
}

export default App;
