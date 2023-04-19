import { uid } from "uid";
import App from "../../App";

//this is the form index js.
// Needs a form component that contains: a heading, two inputs, a submit field, receives a prop called onAddActivity
//handle the submit event -? extract an object with the keys NAME and 'IS GOOD FOR WEATHER'
//onAddActivity to be called as a prop and PASS THE DATA OBJECT as an argument
//then reset form

export function Form() {
  let data = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    data = Object.fromEntries(formData);
    e.target.reset();
    e.target.elements.name.focus();

    // data.isForGoodWeather === "on" ? data.isForGoodWeather = true : false

    return data;
  };

  onAddActivity(data);

  return (
    <>
      <form className="form__activity-form" onSubmit={handleSubmit}>
        <legend>Add new Activity!</legend>
        <label htmlFor="name">Anything</label>
        <input type="text" id="Activity" name="name" required />
        <label htmlFor="isForGoodWeather">
          Is this a good weather activity?
        </label>
        <input type="checkbox" id="isWeatherGood" name="isForGoodWeather" />
        <button type="Submit">Submit Activity</button>
      </form>
    </>
  );
}
