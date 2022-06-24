'use strict';

const fs = require('fs');
const path = '../../db/db.json';
const { getArgs } = require('../helpers/getArgs')
const db = require(path);
let {showOverdue, defineOverdued} = require('./showOverdue');
let doneCounter = 0;
let undoneCounter = 0;

const showAmounts = (database) => {
  try {
    let overduedTasks = defineOverdued();
    let overdued = overduedTasks.length;

    for(let el of database.todos) {
      if(el.progress == "undone") undoneCounter++
      if(el.progress == "done") doneCounter++
    }
    console.log(`Number of undone tasks: ${undoneCounter}`);
    console.log(`Number of done tasks: ${doneCounter}`);
    console.log(`Number of overdued tasks: ${overdued}`);
    let res = [doneCounter, undoneCounter, overdued];
    return res;
  } catch(e) {
    console.log('Something went wrong');
  }
}

module.exports = showAmounts;