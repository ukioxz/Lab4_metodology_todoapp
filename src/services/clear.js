'use strict';

const fs = require('fs');
const path = '../../db/db.json';
const db = require(path);
const ls = require('./showAllTask');

const checkDone = (database) => {
  let counter = 0;
  for(let el of database.todos) {
    if(el. progress == "done") counter++;
  }
  return counter;
}

const clearDone = (args, database) => {
  let taskIndex;
  let doneAmount = checkDone(database);
  try {
      for(let el of database.todos) {
        if(doneAmount == 0) {
          console.log('No done tasks')
          break;
        }
        if(el.progress == "done") {
          taskIndex = database.todos.indexOf(el);
          database.todos.splice(taskIndex, 1);
          database.counter--

          if(database == db) {
            fs.writeFileSync(path, JSON.stringify(database), (err) => {
              if (err) throw err;
            });
          }
          ls(args, database);
        }
      }
    
    if(database.todos.length == 0) {
      console.log('No tasks in the list')
    } 
  } catch(e) {
      console.log(e)
  }
}

module.exports = clearDone;