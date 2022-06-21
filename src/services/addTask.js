'use strict';
const fs = require('fs');
const path = '../../db/db.json';
const { getArgs } = require('../helpers/getArgs')
const db = require(path);

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