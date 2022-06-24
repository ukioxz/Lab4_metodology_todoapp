'use strict';

const db = require('../../db/db.json');

const showReportTodo = (args) => {
  const doneTodos = db.todos.filter(el => el.progress === "done");
 
  for (let i = 0; i < doneTodos.length; i++)
  {
    const todo = doneTodos[i];
    console.log('\x1b[35m%s\x1b[0m', 'Completed tasks:')
    console.log(`- ${todo.task} is done on ${todo.whenWasDone}`);
  }
}

module.exports = showReportTodo;