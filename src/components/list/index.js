//this is the list index.js
//it will need to render a list with items for each activity, and put them in local storage
//a headline based on whether weather is good or bad
//a delete button -> onDeleteActivity -> pass id as an argument

export const List = ({ activities, weather }) => {
  let headlineText = "headline";
  weather === true
    ? (headlineText = "The weather is awesome! Go outside and...")
    : (headlineText = "Bad weather outside! Here's what you can do now:");
  return (
    <>
      <h2>{headlineText}</h2>
      <ul>
        {activities.map((activity, index) => {
          return <li key={index}>{activity.name}</li>;
        })}
      </ul>
    </>
  );
};
