'use strict';
const fs = require('fs');
const path = '../../db/db.json';
const args = process.argv;
const { dateChecker } = require('../helpers/checkDate')
const db = require(path);

if (!fs.existsSync(path)) {
  let createStream = fs.createWriteStream(path);
  createStream.end();
}


const menuFunction = () => {
  const menu = `
    Usage :-
    $ node index.js add <todo, deadline(YYYY-MM-DD)>   # Add a new todo
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

      if (dateChecker(new Date(deadline)) && taskName !== '') {
        const taskObj = {
          id: 0,
          task: taskName,
          description: '-',
          deadline: deadline,
          progress: 'undone'
        }

        return taskObj;
      } else {
        console.log('Incorrect input!');
      }
    } 
  }
}

const addDescription = () => {
  let info = '';
  for (let i = 4; i < args.length; i++) {
    info += args[i] + ' ';    
  }
  const description = info.trim();
  const id = parseInt(args[3]);

  db.todos.forEach(task => {
    if (task.id === id) {
      task.description = description;
      fs.writeFileSync(path, JSON.stringify(db), (err) => {
        if (err) throw err;
      });
      console.log('Description is added:\n', task)
    }
  })
}

const addFunction = () => {
  const task = getArgs();

  try {
    db.counter++;
    task.id = db.counter;
    db.todos.push(task);
            
    fs.writeFileSync(path, JSON.stringify(db), (err) => {
      if (err) throw err;
    });

    console.log('Task is added:\n', task);
    console.log(`If you want to add description: $ node index.js describe <id> <description>`);
  } catch (err) {
    console.log('An error occurred... Please try again')
  }
}


if (args[2] === 'add') {
  //menuFunction();
  addFunction();
  
}

if (args[2] === 'describe') {
  addDescription();
}