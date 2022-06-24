'use strict';

const db = require('../../db/db.json');
const { displayTask } = require('../helpers/displayTask');

const showSortDeadline = (args) => {  
  const date = new Date();
  const dateStr = date.toISOString().split('T')[0];
  const data = db.todos;
  const undoneTodos = data.filter(el => el.progress === "undone");

  const sortByDate = undoneTodos.sort((a, b) => {
    let dateA = new Date(a.deadline);
    let dateB = new Date(b.deadline);
    return dateA-dateB;
  });

  let sortedTodos = [];
  for (let i = 0; i < sortByDate.length; i++) {
    const todo = sortByDate[i];
    if (dateStr <= todo.deadline) {
      sortedTodos.push(todo);
    }
    
    if (i === sortByDate.length-1) {
      const tableData = sortedTodos.reduce((acc, {id, ...x}) => { acc[id] = x; return acc}, {});
      console.log('Sorted tasks by deadlines:');
      console.table(tableData);
    }
  }
  
}

module.exports = showSortDeadline;

