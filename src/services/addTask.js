'use strict';
const fs = require('fs');
const path = '../../db/db.json';
const { dateChecker } = require('../helpers/checkDate')
const db = require(path);

const getArgs = (args) => {
  let newTodo = '';

  for (let i = 3; i < args.length; i++) {
    if (args[i].includes(',')) {
      for (let j = 3; j < i+1; j++) {
        newTodo += args[j] + ' ';
      }
      const taskName = newTodo.slice(0, -2).toString();
      const deadline = args[i+1];

      if (dateChecker(new Date(deadline)) && taskName !== '') {
        const taskObj = {
          id: 0,
          task: taskName,
          description: '-',
          deadline: deadline,
          progress: 'undone'
        }

        return taskObj;
      } else {
        console.log('Incorrect input!');
      }
    } 
  }
}

const addFunction = (args) => {
  const task = getArgs(args);
  
  try {
    db.counter++;
    task.id = db.counter;
    db.todos.push(task);
            
    fs.writeFileSync(path, JSON.stringify(db), (err) => {
      if (err) throw err;
    });

    console.log('Task is added:\n', task);
    console.log(`If you want to add description: $ node main.js describe <id> <description>`);
  } catch (err) {
    console.log('An error occurred... Please try again')
  }
}

module.exports = addFunction;