'use strict';

const db = require('../../db/db.json');

const showReportTodo = (args) => {
  const checkIfUndone = db.todos.every((task) => {
    return task.progress == 'undone'
  })
   
  if (checkIfUndone) {
    console.log('\x1b[35m%s\x1b[0m', 'No task is done(');
 } else {
  const doneTodos = db.todos.filter(el => el.progress === "done");
  for (let i = 0; i < doneTodos.length; i++)
  {
    const todo = doneTodos[i];
    console.log('\x1b[33m%s\x1b[0m', 'Completed tasks:')
    console.log(`- ${todo.task} is done on ${todo.whenWasDone}`);
  }
 }
  
}

module.exports = showReportTodo;