'use strict';

const args = process.argv;
const addFunction = require('./addTask');
const addDescription = require('./addDescription');
const showAllTask = require('./showAllTask');
const deleteTask = require('./delete');
const markAsDone = require('./markAsDone');
const showOverdue = require('./showOverdue');
const showSortDeadline = require('./sortDeadline')
const showReportTodo = require('./reportTodo')

const commands = ['add', 'describe', 'ls', 'delete', 'done', 'showOverdue', 'undone', 'report']
const methods = [addFunction, addDescription, showAllTask, deleteTask, 
  markAsDone, showOverdue, showSortDeadline, showReportTodo]


// node main.js add <todo, deadline(YYYY-MM-DD)>   # Add a new todo
// node main.js describe <id> <description>   # Add description to a todo
// node main.js delete <taskName> <date(YYYY-MM-DD)>   # Delete task
// node main.js done <id> <date(YYYY-MM-DD)>   # Mark task as done

const runTodoList = () => {
    for(let el of commands) {
      if(args[2] === el) methods[commands.indexOf(el)](args);
    }
}

runTodoList();