//this is the list index.js
//it will need to render a list with items for each activity, and put them in local storage
//a headline based on whether weather is good or bad
//a delete button -> onDeleteActivity -> pass id as an argument

export const List = ({ activities }) => {
  return (
    <ul>
      {activities.map((activity, index) => {
        return <li key={index}>{activity.name}</li>;
      })}
    </ul>
  );
};
