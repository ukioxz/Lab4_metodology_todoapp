'use strict';

const args = process.argv;
const addFunction = require('./addTask');
const addDescription = require('./addDescription');
const showAllTask = require('./showAllTask');
const deleteTask = require('./delete');

// node main.js add <todo, deadline(YYYY-MM-DD)>   # Add a new todo
// node main.js describe <id> <description>   # Add description to a todo

const runTodoList = () => {
    if (args[2] === 'add') {
        addFunction(args);
    } else if (args[2] === 'describe') {
        addDescription(args);
    }  else if (args[2] === 'ls'){
        showAllTask(args)
    } else if (args[2] === 'delete'){
      deleteTask(args)
  }
}

runTodoList();