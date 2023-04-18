import { uid } from "uid";

export function Form(onAddActivity) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    e.target.reset();
    e.target.elements.name.focus();

    console.log(data);
  };

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
