'use strict';

const fs = require('fs');
const path = '../../db/db.json';
const { getArgs } = require('../helpers/getArgs')
const db = require(path);
let overdued = 0;

if (!fs.existsSync(path)) {
  let createStream = fs.createWriteStream(path);
  createStream.end();
}

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
  let filteredArr = defineOverdued();
  for(let el of filteredArr) {
    console.log(`${el.task}: ${el.description} ${el.deadline} ${el.progress}`);
  }
}


module.exports = {showOverdue, defineOverdued};