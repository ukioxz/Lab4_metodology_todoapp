'use strict';

const fs = require('fs');
const data = require('../../db/db.json');
const { getArgs } = require('../helpers/getArgs')

const showSortDeadline = (args) => {
  const task = getArgs(args);
  
  const dataJson = data.todos;
  const dataStr = JSON.stringify(dataJson);
  const dataTodos = JSON.parse(dataStr);
  
  const undoneTodos = dataTodos.filter(el => el.progress === "undone");

  const sortByDate = undoneTodos.sort((a, b) => {
    let dateA = new Date(a.deadline);
    let dateB = new Date(b.deadline);
    return dateB-dateA;
  });

  for (let i = 0; i < sortByDate.length; i++)
  {
    const todo = sortByDate[i];
    console.log(`${todo.task}: ${todo.description} ${todo.deadline} ${todo.progress}`);
  }
}

module.exports = showSortDeadline;

