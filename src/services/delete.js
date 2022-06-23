'use strict';

const fs = require('fs');
const path = '../../db/db.json';
const db = require(path);

if (!fs.existsSync(path)) {
  let createStream = fs.createWriteStream(path);
  createStream.end();
}

const getTask = (id) => {
  for (let el of db.todos) {
    if(el.id == id) return el
  }
}

const deleteTask = (args) => {
  let taskIndex;
  let deletedTask;
  let currTask;
  try {
    for(let el of db.todos) {
      currTask = getTask(args[3]);
      if(!currTask) {
        console.log('Does not exist') 
        break
      }
      if(args[3] == el.id) {
        taskIndex = db.todos.indexOf(el)
        db.todos.splice(taskIndex,1)
        db.counter--;
  
        fs.writeFileSync(path, JSON.stringify(db), (err) => {
          if (err) throw err;
        });

        deletedTask = el;
        console.log('Task was deleted\n', deletedTask);
        break
      }
    } 
  } catch(e) {
      console.log('Something went wrong.')
  }
}

module.exports = deleteTask;
