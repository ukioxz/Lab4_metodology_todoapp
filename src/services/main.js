'use strict';

const args = process.argv;
const addFunction = require('./addTask');
const addDescription = require('./addDescription');
const showAllTask = require('./showAllTask');
const deleteTask = require('./delete');
const markAsDone = require('./markAsDone');
const { showOverdue } = require('./showOverdue');
const showSortDeadline = require('./sortDeadline');
const {showReportTodo, doneTodos} = require('./reportTodo');
const updateTask = require('./update');
const showAmounts = require('./showAmount');
const showStatistics = require('./showStatistics');
const { showMenu } = require('../helpers/consoleMenu')
const path = '../../db/db.json';
const db = require(path);

const commands = ['add', 'describe', 'ls', 'delete', 'done', 'showOverdue',
                  'undone', 'report', 'update', 'amounts', 'statistic'];
                  
const methods = [addFunction, addDescription, showAllTask, deleteTask,
  markAsDone, showOverdue, showSortDeadline, showReportTodo, updateTask,
  showAmounts, showStatistics];

const runTodoList = () => {
    for(let el of commands) {
      if(args[2] === el) {
        methods[commands.indexOf(el)](args, db);
      } else if (args[2] === undefined) {
        showMenu();
      }
    }
}

runTodoList();
