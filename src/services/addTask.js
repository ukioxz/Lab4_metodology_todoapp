'use strict';
const fs = require('fs');
const path = '../../db/db.json';
const { getArgs } = require('../helpers/getArgs');
const { getCurrentDate } = require('../helpers/getCurrentDate');
const { displayTask } = require('../helpers/displayTask');
const db = require(path);

const addFunction = (args) => {
  const task = getArgs(args);
  const currDate = getCurrentDate();
  
  try {
    db.counter++;
    task.id = db.counter;
    task.whenWasCreated = currDate;
    db.todos.push(task);
            
    fs.writeFileSync(path, JSON.stringify(db), (err) => {
      if (err) throw err;
    });

    console.log('Task is added:');
    displayTask(task);
    console.log(`If you want to add description: $ node main.js describe <id> <description>`);
  } catch (err) {
    console.log('An error occurred... Please try again')
  }
}

module.exports = addFunction;