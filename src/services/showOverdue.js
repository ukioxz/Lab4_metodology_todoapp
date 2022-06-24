'use strict';

const fs = require('fs');
const path = '../../db/db.json';
const { getArgs } = require('../helpers/getArgs')
const db = require(path);

const defineOverdued = () => {
  let currDate = new Date();

  const compareDates = (first, second) => {
    return (first.setHours(0,0,0,0) - second.setHours(0,0,0,0) >= 0) ? false : true
  }
  const callback = (el) => {
    let deadlineDate = new Date(el.deadline)
    return compareDates(deadlineDate, currDate) && el.progress === "undone";
  }
  
  return db.todos.filter(callback)
}

const showOverdue = (args) => {
  try {
    let filteredArr = defineOverdued();
    for(let el of filteredArr) {
      console.log(`${el.task}: ${el.description} ${el.deadline} ${el.progress}`);
    }
  } catch(e) {
      console.log('Something went wrong');
  }
}


module.exports = {showOverdue, defineOverdued};