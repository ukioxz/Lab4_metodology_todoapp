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
  try {
    let doneAmount = checkDone(database);
        if(doneAmount == 0 && database.todos.length > 0) {
          console.log('No done tasks');
          return
        }

      let filteredDb = database.todos.filter(el => el.progress == "undone");
      database.todos = filteredDb;
      database.counter = filteredDb.length;

      if(database == db) {
        fs.writeFileSync(path, JSON.stringify(database), (err) => {
          if (err) throw err;
        });
      }
      if(database.todos.length == 0) {
        console.log('No tasks in the list');
        return
      } 
      ls(args, db);
  } catch(e) {
      console.log(e)
  }
}

module.exports = clearDone;