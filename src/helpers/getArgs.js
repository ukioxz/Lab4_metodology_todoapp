'use strict';
const { dateChecker } = require('../helpers/checkDate');

const getArgs = (args) => {
  let newTodo = '';

  for (let i = 3; i < args.length; i++) {
    if (args[i].includes(':')) {
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
          whenWasCreated: '',
          whenWasDone: '',
          progress: 'undone'
        }

        return taskObj;
      } else {
        console.log('Incorrect input!');
      }
    } 
  }
}

module.exports = { getArgs };