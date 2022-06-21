'use strict';

const args = process.argv;
const addFunction = require('./addTask');
const addDescription = require('./addDescription');

// node main.js add <todo, deadline(YYYY-MM-DD)>   # Add a new todo
// node main.js describe <id> <description>   # Add description to a todo

const runTodoList = () => {
    if (args[2] === 'add') {
        addFunction(args);
    } else if (args[2] === 'describe') {
        addDescription(args);
    }  
}

runTodoList();