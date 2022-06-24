'use strict';

const db = require('../../db/db.json');

const showAllTask = (args) => {
  const data = db.todos;
  const tableData = data.reduce((acc, {id, ...x}) => { acc[id] = x; return acc}, {});
  console.table(tableData);
}

module.exports = showAllTask