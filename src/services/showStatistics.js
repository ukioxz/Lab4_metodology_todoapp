'use strict';

const db = require('../../db/db.json');

const showStatistics = (args) => {
  
  const data = db.todos;
  const doneTodos = data.filter(el => el.progress === "done");

  for (let i = 0; i < doneTodos.length; i++)
  { 
    const todo = doneTodos[i];
    const countTimeTask = Math.abs(todo.whenWasDone[i] - todo.whenWasCreated[i])
    const timeTask = countTimeTask + 1;
    if (timeTask == 1){
      console.log(`${todo.task} within ${timeTask} day`); 
  } else {
      console.log(`${todo.task} within ${timeTask} days`); 
  }
  }
 
}

module.exports = showStatistics;