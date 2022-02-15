/* eslint-disable react/function-component-definition */
import React from 'react';
import Tasks from './Tasks';

// eslint-disable-next-line no-unused-vars
export default (props) => {
  function getTasks() {
    return Tasks.map((task) => <li key={task}>{task}</li>);
  }
  return (
    <div>
      <h2>Task List</h2>
      <ul>{getTasks()}</ul>
    </div>
  );
};
