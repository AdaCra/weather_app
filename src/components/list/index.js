//a headline based on whether weather is good or bad
//a delete button -> onDeleteActivity -> pass id as an argument

import binImage from "../img/recycleBin.png";

export const List = ({ activities, onDeleteActivity, weather }) => {
  let headlineText = weather
    ? "A beautiful day to outside and..."
    : "Don't let the gray get you down, let's...";

  return (
    <section id="list__container">
      <h3 id="list__heading">{headlineText}</h3>
      <ul id="list__ulHolder">
        {activities.map((activity) => {
          return (
            <li key={activity.id} className="list__listItem">
              {activity.name}
              <button
                className="list__deleteButton"
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
    </section>
  );
};
