'use strict';

const db = require('../../db/db.json');

const displayTask = (task) => {
    let arr = [];
    arr.push(task);
    const tableData = arr.reduce((acc, {id, ...x}) => { acc[id] = x; return acc}, {});
    console.table(tableData);
}

module.exports = { displayTask }