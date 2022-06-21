'use strict';
const fs = require('fs');
const path = '../../db/db.json';
const { getArgs } = require('../helpers/getArgs')
const db = require(path);

if (!fs.existsSync(path)) {
  let createStream = fs.createWriteStream(path);
  createStream.end();
}

const deleteTask = (args) => {
  const task = getArgs(args);
  let taskIndex;

  try {
    for(let el of db.todos) {
      if(task.task == el.task && task.deadline == el.deadline) {
        taskIndex = db.todos.indexOf(el)
        db.todos.splice(taskIndex,1)
        db.counter--;
  
        fs.writeFileSync(path, JSON.stringify(db), (err) => {
          if (err) throw err;
        });

        console.log('Task was deleted:\n', task);
    }
  } 
  } catch(e) {
      console.log('Something went wrong. Task was not deleted')
  }
  
}

module.exports = deleteTask;
