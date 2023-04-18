import { Form } from "./components/form";
import { useState } from "react";

function App() {
  const [activities, setActivities] = useState({
    name: "test",
    isForGoodWeather: null,
    id: 1,
  });
  function handleAddActivity(newActivity) {}
  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
