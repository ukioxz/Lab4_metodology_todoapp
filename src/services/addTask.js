'use strict';
const fs = require('fs');
const path = '../../db/db.json';
const { getArgs } = require('../helpers/getArgs');
const { getCurrentDate } = require('../helpers/getCurrentDate');
const { displayTask } = require('../helpers/displayTask');
const db = require(path);

const addFunction = (args, database) => {
  const task = getArgs(args);
  const currDate = getCurrentDate();
  
  try {
    database.counter++;
    task.id = database.counter;
    task.whenWasCreated = currDate;
    database.todos.push(task);

    if(database == db) {
      fs.writeFileSync(path, JSON.stringify(database), (err) => {
        if (err) throw err;
      });
    }

    console.log('Task is added:');
    displayTask(task);
    console.log(`If you want to add description: $ node main.js describe <id> <description>`);
  } catch (err) {
    console.log('An error occurred... Please try again')
  }
}

module.exports = addFunction;