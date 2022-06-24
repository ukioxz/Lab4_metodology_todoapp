'use strict';
const fs = require('fs');
const path = '../../db/db.json';
const db = require(path);
const { displayTask } = require('../helpers/displayTask');

const addDescription = (args, database) => {
    let info = '';
    for (let i = 4; i < args.length; i++) {
      info += args[i] + ' ';    
    }
    const description = info.trim();
    const id = parseInt(args[3]);
  
    database.todos.forEach(task => {
      if (task.id === id) {
        task.description = description;

        if(database == db) {
          fs.writeFileSync(path, JSON.stringify(database), (err) => {
            if (err) throw err;
          });
        }
        
        console.log('Description is added:');
        displayTask(task);
      }
    })
  }

  module.exports = addDescription;