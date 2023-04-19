import { Form } from "./components/form";
import { useState } from "react";
import { List } from "./components/list";

// this is the APP.JS
//needs: STATE for activities
//function handleAddActivity which accepts a new activity object as parameter and adds this object to the activities state
//passes handleAddActivity to the form component

function App() {
  const [activities, setActivities] = useState([]);
  const handleAddActivity = (newActivity) => {
    setActivities(...(activities + newActivity));
    console.log(activities);
  };

  return (
    <>
      {" "}
      <Form onAddActivity={handleAddActivity} />
      {/* <List /> */}
    </>
  );
}

export default App;
