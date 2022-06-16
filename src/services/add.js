'use strict';
const fs = require('fs');

const args = process.argv;
const path = '../../db/db.json';

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

const addFunction = () => {
  let newTodo = '';

  for (let i = 3; i < args.length; i++) {
    if (args[i].includes(',')) {
      for (let j = 3; j < i+1; j++) {
        newTodo += args[j] + ' ';
      }
      const task = newTodo.slice(0, -2).toString();
      const deadline = args[i+1];

      if (task) {
        const taskDescription = {
          task: task,
          deadline: deadline,
          progress: 'undone'
        }

        const jsonString = fs.readFileSync(path).toString();

        const fileObj = {
           id: taskDescription
        }
        console.log(fileObj);
        fs.writeFile(path, JSON.stringify(fileObj) + '\n' + jsonString, (err) => {
          if (err) throw err;
        });

        } else {
          console.log('No task added');
        }
    }
  }
}


if (args[2] === 'add') {
 //menuFunction();
  addFunction();
}
