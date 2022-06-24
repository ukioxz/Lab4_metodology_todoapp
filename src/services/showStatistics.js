'use strict';

const db = require('../../db/db.json');

const showStatistics = (args) => {
  const checkIfUndone = db.todos.every((task) => {
    return task.progress == 'undone'
  });
  if (checkIfUndone) {
    console.log('\x1b[35m%s\x1b[0m', 'No task is done(');
  }else{ 
    const doneTodos = db.todos.filter(el => el.progress === "done");
     for (let i = 0; i < doneTodos.length; i++)
    { 
      const todo = doneTodos[i];
      const countTimeTask = Math.abs(todo.whenWasDone[i] - todo.whenWasCreated[i])
      const timeTask = countTimeTask + 1;
      console.log('\x1b[33m%s\x1b[0m', 'Statistic of tasks:')
      if (timeTask == 1){
        console.log(`${todo.task} within ${timeTask} day`); 
      }else{
        console.log(`${todo.task} within ${timeTask} days`); 
       }
    }
  }
}
 


module.exports = showStatistics;