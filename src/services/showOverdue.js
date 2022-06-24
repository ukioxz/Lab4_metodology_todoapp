'use strict';

const fs = require('fs');
const path = '../../db/db.json';
const { getArgs } = require('../helpers/getArgs')
const db = require(path);

const defineOverdued = (database) => {
  let currDate = new Date();

  const compareDates = (first, second) => {
    return (first.setHours(0,0,0,0) - second.setHours(0,0,0,0) >= 0) ? false : true
  }
  const callback = (el) => {
    let deadlineDate = new Date(el.deadline)
    return compareDates(deadlineDate, currDate) && el.progress === "undone";
  }
  
  return database.todos.filter(callback)
}

const showOverdue = (args, database) => {
  try {
    let filteredArr = defineOverdued(database);
    for(let el of filteredArr) {
      console.log(`${el.task}: ${el.description} ${el.deadline} ${el.progress}`);
    }
    return filteredArr;
  } catch(e) {
      console.log('Something went wrong');
  }
}


module.exports = {showOverdue, defineOverdued};