//this is the list index.js
//it will need to render a list with items for each activity, and put them in local storage
//a headline based on whether weather is good or bad
//a delete button -> onDeleteActivity -> pass id as an argument
import binImage from "../../img/recycleBin.png";

export const List = ({ activities, weather, onDeleteActivity }) => {
  let headlineText = "headline";
  weather === true
    ? (headlineText = "The weather is awesome! Go outside and...")
    : (headlineText = "Bad weather outside! Here's what you can do now:");

  return (
    <>
      <h2>{headlineText}</h2>
      <ul>
        {activities.map((activity) => {
          return (
            <li key={activity.id}>
              {activity.name}
              <button
                onClick={() => {
                  onDeleteActivity?.(activity.id);
                }}
              >
                <img src={binImage} alt="Delete icon" />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
