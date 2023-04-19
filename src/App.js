import { Form } from "./components/form";
import { useState } from "react";
import { List } from "./components/list";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
// this is the APP.JS
//needs: STATE for activities
//function handleAddActivity which accepts a new activity object as parameter and adds this object to the activities state
//passes handleAddActivity to the form component

function App() {
  // const [activities, setActivities] = useState([]);
  function handleAddActivity(newActivity) {}

  return (
    <>
      {" "}
      <Form />
      {/* <List /> */}
    </>
  );
}

export default App;
