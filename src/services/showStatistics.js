'use strict';

const fs = require('fs');
const data = require('../../db/db.json');
const { getArgs } = require('../helpers/getArgs')

const showStatistics = (args) => {
  const task = getArgs(args);
  
  const dataJson = data.todos;
  const dataStr = JSON.stringify(dataJson);
  const dataTodos = JSON.parse(dataStr);

  const doneTodos = dataTodos.filter(el => el.progress === "done");

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