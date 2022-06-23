'use strict';

const fs = require('fs');
const data = require('../../db/db.json');
const { getArgs } = require('../helpers/getArgs')

const showReportTodo = (args) => {
  const task = getArgs(args);
  
  const dataJson = data.todos;
  const dataStr = JSON.stringify(dataJson);
  const dataTodos = JSON.parse(dataStr);

  const doneTodos = dataTodos.filter(el => el.progress === "done");
 
  for (let i = 0; i < doneTodos.length; i++)
  {
    const todo = doneTodos[i];
    console.log(`${todo.task}: ${todo.description} done:${todo.whenWasDone}`);
    
  }
}

module.exports = showReportTodo;