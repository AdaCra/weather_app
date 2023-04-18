import { Form } from "./components/form";
import { useState } from "react";
import { List } from "./components/list";

function App() {
  function onAddActivity(newActivity) {}

  const [activities, setActivities] = useState([]);

  return (
    <>
      {" "}
      <Form onAddActivity={onAddActivity} />
      <List />
    </>
  );
}

export default App;
