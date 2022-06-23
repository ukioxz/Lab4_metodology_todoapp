'use strict';

const fs = require('fs');
const path = '../../db/db.json';
const db = require(path);
let exist;

const getTask = (id, database) => {
  for (let el of database.todos) {
    if(el.id == id) return el
  }
}

const deleteTask = (args, database) => {
  let taskIndex;
  let deletedTask;
  let currTask;

  try {
    for(let el of database.todos) {
      currTask = getTask(args[3], database);
      if(!currTask) {
        console.log('Does not exist') 
        exist = false;
        break
      }
      if(args[3] == el.id) {
        taskIndex = database.todos.indexOf(el)
        database.todos.splice(taskIndex,1)
        database.counter--;

        if(database == db) {
          fs.writeFileSync(path, JSON.stringify(database), (err) => {
            if (err) throw err;
          });
        }

        deletedTask = el;
        console.log('Task was deleted\n', deletedTask);
        break
      }
    }
    if(database.todos.length == 0) {
      console.log('Does not exist')
    } 
    return exist;
  } catch(e) {
      console.log(e)
  }
}

module.exports = deleteTask;