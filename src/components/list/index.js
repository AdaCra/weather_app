//this is the list index.js
//it will need to render a list with items for each activity, and put them in local storage
//a headline based on whether weather is good or bad
//a delete button -> onDeleteActivity -> pass id as an argument
import React, { useState } from "react";

export const List = (data) => {
  setActivities([...activities, data]);

  return (
    <ul>
      {activities.map(() => {
        return <li>{activities.name}</li>;
      })}
    </ul>
  );
};
