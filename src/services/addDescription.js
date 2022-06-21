'use strict';
const fs = require('fs');
const path = '../../db/db.json';
const db = require(path);

const addDescription = (args) => {
    let info = '';
    for (let i = 4; i < args.length; i++) {
      info += args[i] + ' ';    
    }
    const description = info.trim();
    const id = parseInt(args[3]);
  
    db.todos.forEach(task => {
      if (task.id === id) {
        task.description = description;

        fs.writeFileSync(path, JSON.stringify(db), (err) => {
          if (err) throw err;
        });
        
        console.log('Description is added:\n', task)
      }
    })
  }

  module.exports = addDescription;