'use strict';

const fs = require('fs');
const path = '../../db/db.json';
const { getArgs } = require('../helpers/getArgs')
const db = require(path);
let {showOverdue, defineOverdued} = require('./showOverdue');
let doneCounter = 0;
let undoneCounter = 0;


if (!fs.existsSync(path)) {
  let createStream = fs.createWriteStream(path);
  createStream.end();
}

const showAmounts = (args) => {
  try {
    let overduedTasks = defineOverdued();
    let overdued = overduedTasks.length;

    for(let el of db.todos) {
      if(el.progress == "undone") undoneCounter+=1
      if(el.progress == "done") doneCounter++
    }
    console.log(`Number of undone tasks: ${undoneCounter}`);
    console.log(`Number of done tasks: ${doneCounter}`);
    console.log(`Number of overdued tasks: ${overdued}`);
  } catch(e) {
    console.log('Something went wrong');
  }
}

module.exports = showAmounts;