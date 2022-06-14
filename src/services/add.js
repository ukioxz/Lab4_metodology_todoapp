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
    $ node index.js add <todo>   # Add a new todo
  `;
  console.log(menu);
};

const addFunction = () => {
  const newTodo = args[3];
  
  if (newTodo) {
    //const jsonString = fs.readFileSync(path);
    //const fileData = JSON.parse(jsonString);
    //console.log(fileData);
    const taskToAdd = {
      task: newTodo,
      progress: 'undone'
    }
    
    fs.writeFile(path, JSON.stringify(taskToAdd), (err) => {
        if (err) throw err;
    });

  } else {
    console.log('No task');
  }
};

if (args[2] === 'add') {
 //menuFunction();
  addFunction();
}
