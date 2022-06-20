'use strict';
const fs = require('fs');
const path = '../../db/db.json';

const args = process.argv;

if (!fs.existsSync(path)) {
  let createStream = fs.createWriteStream(path);
  createStream.end();
}


const menuFunction = () => {
  const menu = `
    Usage :-
    $ node index.js add <todo , deadline(YYYY-MM-DD)>   # Add a new todo
  `;
  console.log(menu);
};


const getArgs = () => {
  let newTodo = '';

    for (let i = 3; i < args.length; i++) {
      if (args[i].includes(',')) {
        for (let j = 3; j < i+1; j++) {
          newTodo += args[j] + ' ';
        }
        const taskName = newTodo.slice(0, -2).toString();
        const deadline = args[i+1];
  
        const taskObj = {
          id: 0,
          task: taskName,
          deadline: deadline,
          progress: 'undone'
        }

        return taskObj;
      } 
    }
}


const addFunction = () => {
  const task = getArgs();
  const db = require(path);
  db.counter ++;
  task.id = db.counter;
  db.todos.push(task);
          
  fs.writeFileSync(path, JSON.stringify(db), (err) => {
    if (err) throw err;
  });

  console.log('Task is added');
}


if (args[2] === 'add') {
  //menuFunction();
  addFunction();
}
