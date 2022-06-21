'use strict';

const fs = require('fs');
const data = require('../../db/db.json');

const dataJson = data.todos;
const dataStr = JSON.stringify(dataJson)
const dataTodos = JSON.parse(dataStr)

for (let i = 0; i < dataTodos.length; i++)
{
    const todo = dataTodos[i];
    console.log(`${todo.task}: ${todo.description} ${todo.deadline} ${todo.progress}`);
}



