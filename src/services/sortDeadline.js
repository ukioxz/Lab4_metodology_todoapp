'use strict';

const fs = require('fs');
const data = require('../../db/db.json');
const { getArgs } = require('../helpers/getArgs')

const showSortDeadline = (args) => {
  const task = getArgs(args);
  
  let date = new Date();
  let dateStr = date.toISOString().split('T')[0];
  
  const dataJson = data.todos;
  const dataStr = JSON.stringify(dataJson);
  const dataTodos = JSON.parse(dataStr);

  const undoneTodos = dataTodos.filter(el => el.progress === "undone");
  const sortByDate = undoneTodos.sort((a, b) => {
    let dateA = new Date(a.deadline);
    let dateB = new Date(b.deadline);
    return dateA-dateB;
  });
 
  for (let i = 0; i < sortByDate.length; i++)
  {
    let sortedTodos = [];
    const todo = sortByDate[i];
    const todosDeadline = sortedTodos.push(`${todo.deadline}`)
    let todosStr = sortedTodos.join();
    if (dateStr <= todosStr) {
      console.log(`${todo.task}: ${todo.description} ${todo.deadline} ${todo.progress}`);
    }
  }
}

module.exports = showSortDeadline;

