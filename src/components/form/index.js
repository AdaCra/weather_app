//this is the form index js.
// Needs a form component that contains: a heading, two inputs, a submit field, receives a prop called onAddActivity
//handle the submit event -? extract an object with the keys NAME and 'IS GOOD FOR WEATHER'
//onAddActivity to be called as a prop and PASS THE DATA OBJECT as an argument
//then reset form

import { uid } from "uid";
export function Form({ onAddActivity }) {
  let data = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    data = Object.fromEntries(formData);
    e.target.reset();
    e.target.elements.name.focus();
    data.id = uid();

    if (data.isForGoodWeather === "on") {
      data.isForGoodWeather = true;
    } else {
      data.isForGoodWeather = false;
    }

    onAddActivity(data);
  };

  return (
    <>
      <form id="form__activityForm" onSubmit={handleSubmit}>
        <h3>Add new Activity!</h3>
        <div className="for__listItem">
          <label htmlFor="name">I want to </label>
          <input
            type="text"
            id="form__activityInput"
            name="name"
            // required
            placeholder="Swim in the Sea"
          />
        </div>
        <div className="for__listItem">
          <label htmlFor="isForGoodWeather">
            Is this a good weather activity?
          </label>
          <input
            type="checkbox"
            id="form__weatherCheckbox"
            name="isForGoodWeather"
          />
        </div>
        <button type="Submit" id="form__submitButton">
          Submit Activity
        </button>
      </form>
    </>
  );
}
